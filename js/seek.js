/**
 * The following lines capture the inputs and label's for the frame manipulation.
 */
const frame_index_input = document.querySelector("#frame_index")
const frame_index_show = document.querySelector("#seek_frame_index")
const frame_time_input = document.querySelector("#frame_time")
const frame_time_show = document.querySelector("#seek_frame_time")

/**
 * Set current index value and time (in seconds)
 */
frame_index_show.innerHTML = frame_index_input.value
frame_time_show.innerHTML = frame_time_input.value/22000.0

frame_index_input.addEventListener("change", () => {
    frame_index_show.innerHTML = frame_index_input.value
    var val = frame_index_input.value
    fetch_frame("seek_to_frame",val,"Seek to frame by index")
})

frame_time_input.addEventListener("change",() =>{
    var val = frame_time_input.value
    frame_time_show.innerHTML = val/22000.0
    fetch_frame("seek_to_time",val/22000.0,"Seek to frame by time")
})

/**
 * This function is responsible for sending the JSON with the respective command for the frame manipulation.
 * @param {*} cmd command: "seek_to_time" or "seek_to_frame"
 * @param {*} value par (Frame index or time in seconds)
 * @param {*} message action performed
 */
async function fetch_frame(cmd,value, message) {
    const response = await fetch("system/station1/dhs1/playback",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({cmd:cmd,par: value})
    })
    console.log({"Ok": response.ok, "Status": response.status, "Message": message})
}