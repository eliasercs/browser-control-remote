const frame_index_input = document.querySelector("#frame_index")
const frame_time_input = document.querySelector("#frame_time")

const terminate_button = document.querySelector("#terminate")

const play_button = document.querySelector("#play")
const stop_button = document.querySelector("#stop")

var play = false

function requestInfo() {
    if (play) {
        info()
            .then(res => res.json())
            .then(data => {
                //console.log(data.fri)
                //console.log(data)
                frame_index_input.value = data.fri
                frame_time_input.value = data.fri
                document.querySelector("#seek_frame_index").innerHTML = frame_index_input.value
                document.querySelector("#seek_frame_time").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
            })
            .catch(err => console.log(err))
    }
}

terminate_button.addEventListener("click", () => {
    if (confirm("Do you want to end the application?")) {
        terminate()
    }
})

fetch("/system/station1/dhs1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ cmd: "info", par: "" })
    })
    .then(res => res.json())
    .then(data => {
        const { mode, frc, fri } = data
        console.log(data)
        if (mode === "playback") {
            // Seek to frame by index
            frame_index_input.setAttribute("min", 0)
            frame_index_input.setAttribute("max", frc - 1)
            frame_index_input.value = fri
            document.querySelector("#seek_frame_index").innerHTML = frame_index_input.value
            frame_index_input.addEventListener("change", async() => {
                    document.querySelector("#seek_frame_index").innerHTML = frame_index_input.value
                    seek("seek_to_frame", frame_index_input.value)
                    frame_time_input.value = frame_index_input.value
                    document.querySelector("#seek_frame_time").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
                })
                // Seek to frame by time
            frame_time_input.setAttribute("min", 0)
            frame_time_input.setAttribute("max", (frc - 1))
            frame_time_input.value = fri
            document.querySelector("#seek_frame_time").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
            frame_time_input.addEventListener("change", async() => {
                document.querySelector("#seek_frame_time").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
                seek("seek_to_time", frame_time_input.value / 22000.0)
                frame_index_input.value = frame_time_input.value
                document.querySelector("#seek_frame_index").innerHTML = frame_index_input.value
            })
            play_button.addEventListener("click", () => {
                play = true
                setInterval("requestInfo()", 250)
            })
            stop_button.addEventListener("click", () => {
                play = false
                info()
                    .then(res => res.json())
                    .then(data => {
                        frame_index_input.value = data.fri
                        frame_time_input.value = data.fri
                        document.querySelector("#seek_frame_index").innerHTML = frame_index_input.value
                        document.querySelector("#seek_frame_time").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
                    })
                    .catch(err => console.log(err))
            })
        }
    })
    .catch(err => console.log(err))