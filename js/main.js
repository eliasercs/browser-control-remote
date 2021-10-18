const frame_index_input = document.querySelector("#seek_by_index")
const frame_time_input = document.querySelector("#seek_time")

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
                document.querySelector("#seek_by_index_value").innerHTML = frame_index_input.value
                document.querySelector("#seek_time_value").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
                var pixelesIndex = document.querySelector("#seek_by_index").value / document.querySelector("#seek_by_index").getAttribute("max")
                document.querySelector("#seek_by_index_value").style.left = (pixelesIndex * 92.5) + "%"
                document.querySelector("#seek_by_index_value").innerHTML = frame_index_input.value
                var pixelesTime = document.querySelector("#seek_time").value / document.querySelector("#seek_time").getAttribute("max")
                document.querySelector("#seek_time_value").style.left = (pixelesTime * 92.5) + "%"
                document.querySelector("#seek_time_value").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
            })
            .catch(err => console.log(err))
    }
}

terminate_button.addEventListener("click", () => {
    if (confirm("Do you want to end the application?")) {
        terminate()
    }
})

function main() {
    document.querySelector("#stations").addEventListener("change", () => {
        if (document.querySelector("#stations").value !== "default") {
            fetch(`/system/${document.querySelector("#stations").value}/dhs1`, {
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

                    infoimg()
                    .then(res => res.blob())
                        .then(data => {
                            var file = new File([data], "file.jpeg")
                            var urlCreator = window.URL || window.webkitURL
                            document.querySelector("#frameImage").setAttribute("src", urlCreator.createObjectURL(file))
                        })
                        .catch(err => console.log(err))

                    if (mode === "playback") {
                        // Seek to frame by index
                        frame_index_input.setAttribute("min", 0)
                        frame_index_input.setAttribute("max", frc - 1)
                        frame_index_input.value = fri
                        //document.querySelector("#seek_by_index_value").innerHTML = frame_index_input.value
                        var pixelesIndex = document.querySelector("#seek_by_index").value / document.querySelector("#seek_by_index").getAttribute("max")
                        document.querySelector("#seek_by_index_value").style.left = (pixelesIndex * 92.5) + "%"
                        document.querySelector("#seek_by_index_value").innerHTML = frame_index_input.value
                        frame_index_input.addEventListener("input", async () => {
                            document.querySelector("#seek_by_index_value").innerHTML = frame_index_input.value
                            seek("seek_to_frame", frame_index_input.value)
                            frame_time_input.value = frame_index_input.value
                            document.querySelector("#seek_time_value").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
                        })
                        // Seek to frame by time
                        frame_time_input.setAttribute("min", 0)
                        frame_time_input.setAttribute("max", (frc - 1))
                        frame_time_input.value = fri
                        //document.querySelector("#seek_time_value").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
                        var pixelesTime = document.querySelector("#seek_time").value / document.querySelector("#seek_time").getAttribute("max")
                        document.querySelector("#seek_time_value").style.left = (pixelesTime * 92.5) + "%"
                        document.querySelector("#seek_time_value").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
                        frame_time_input.addEventListener("input", async () => {
                            document.querySelector("#seek_time_value").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
                            seek("seek_to_time", frame_time_input.value / 22000.0)
                            frame_index_input.value = frame_time_input.value
                            document.querySelector("#seek_by_index_value").innerHTML = frame_index_input.value
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
                                    document.querySelector("#seek_by_index_value").innerHTML = frame_index_input.value
                                    document.querySelector("#seek_time_value").innerHTML = (frame_time_input.value / 22000.0).toFixed(6)
                                })
                                .catch(err => console.log(err))
                        })
                    }
                })
                .catch(err => console.log(err))

        } else {
            //alert("You must select a station.")
        }

    })
}

window.onload = main()


