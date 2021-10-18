const frame_i_input = document.querySelector("#seek_by_index")
const frame_index_show = document.querySelector("#seek_by_index_value")
const frame_t_input = document.querySelector("#seek_time")
const frame_time_show = document.querySelector("#seek_time_value")

/**
 * Set current index value and time (in seconds)
 */
if (document.querySelector("#stations").value!=="default"){
    frame_index_show.innerHTML = frame_i_input.value
    frame_time_show.innerHTML = (frame_t_input.value/22000.0).toFixed(6)
}

frame_i_input.addEventListener("change", () => {
    if (document.querySelector("#stations").value!=="default"){
        frame_index_show.innerHTML = frame_i_input.value
        var val = frame_i_input.value
        fetch_frame("seek_to_frame",val,"Seek to frame by index")
    } else {
        alert("You must select a station.")
    }
})

frame_t_input.addEventListener("change",() =>{
    if (document.querySelector("#stations").value!=="default"){
        var val = frame_t_input.value
        frame_time_show.innerHTML = (val/22000.0).toFixed(6)
        fetch_frame("seek_to_time",(val/22000.0).toFixed(6),"Seek to frame by time")
    } else {
        alert("You must select a station.")
    }
})

/**
 * This function is responsible for sending the JSON with the respective command for the frame manipulation.
 * @param {*} cmd command: "seek_to_time" or "seek_to_frame"
 * @param {*} value par (Frame index or time in seconds)
 * @param {*} message action performed
 */
async function fetch_frame(cmd,value, message) {
    const response = await fetch(`/system/${document.querySelector("#stations").value}/dhs1/playback`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({cmd:cmd,par: value})
    })
    console.log({"Ok": response.ok, "Status": response.status, "Message": message})
}