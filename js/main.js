const frame_index_input = document.querySelector("#frame_index")
const frame_time_input = document.querySelector("#frame_time")

const terminate_button = document.querySelector("#terminate")

terminate_button.addEventListener("click", () => {
    if (confirm("Do you want to end the application?")) {
        terminate()
    }
})

fetch("/system/station1/dhs1",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({cmd:"info",par:""})
})
.then(res => res.json())
.then(data => {
    const {mode,frc,fri} = data
    if (mode === "playback"){
        // Seek to frame by index
        frame_index_input.setAttribute("min",0)
        frame_index_input.setAttribute("max",frc-1)
        frame_index_input.value = fri
        document.querySelector("#seek_frame_index").innerHTML = frame_index_input.value
        frame_index_input.addEventListener("change",async () => {
            document.querySelector("#seek_frame_index").innerHTML = frame_index_input.value
            seek("seek_to_frame",frame_index_input.value)
            frame_time_input.value = frame_index_input.value
            document.querySelector("#seek_frame_time").innerHTML = frame_time_input.value/22000.0
        })
        // Seek to frame by time
        frame_time_input.setAttribute("min",0)
        frame_time_input.setAttribute("max",(frc-1))
        frame_time_input.value = fri
        document.querySelector("#seek_frame_time").innerHTML = frame_time_input.value/22000.0
        frame_time_input.addEventListener("change", async () => {
            document.querySelector("#seek_frame_time").innerHTML = frame_time_input.value/22000.0
            seek("seek_to_time",frame_time_input.value/22000.0)
            frame_index_input.value = frame_time_input.value
            document.querySelector("#seek_frame_index").innerHTML = frame_index_input.value
        })
    }
})
.catch(err => console.log(err))