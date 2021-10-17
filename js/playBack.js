/**
 * The following lines capture the buttons for the playback mode.
 */
const play_Button = document.querySelector("#play")
const stop_Button = document.querySelector("#stop")
const prev_Button = document.querySelector("#prev")
const next_Button = document.querySelector("#next")
const first_Button = document.querySelector("#first")
const last_Button = document.querySelector("#last")

const seek_norm_input = document.querySelector("#seek_norm")
const show_value_seek_norm = document.querySelector("#value")
show_value_seek_norm.innerHTML = seek_norm.value

/**
 * For each button, when the user clicks, the value of the respective attributes is obtained and the fetch_device method is executed
 */
play_Button.addEventListener("click", () =>{
    var command =play_Button.getAttribute("cmd")
    var par=play_Button.getAttribute("par")
    if(document.querySelector("#stations").value!=="default"){
        fetch_playBack(command,par)
    }else{
        alert("Por favor seleccione una estación")
        console.log("Error")
    }
})

stop_Button.addEventListener("click", () =>{
    var command =stop_Button.getAttribute("cmd")
    var par=stop_Button.getAttribute("par")
    if(document.querySelector("#stations").value!=="default"){
        fetch_playBack(command,par)
    }else{
        alert("Por favor seleccione una estación")
        console.log("Error")
    }
})

prev_Button.addEventListener("click", () =>{
    var command =prev_Button.getAttribute("cmd")
    var par=prev_Button.getAttribute("par")
    if(document.querySelector("#stations").value!=="default"){
        fetch_playBack(command,par)
        move_seek_with_playbakButton()
    }else{
        alert("Por favor seleccione una estación")
        console.log("Error")
    }
    
})

next_Button.addEventListener("click", () =>{
    var command =next_Button.getAttribute("cmd")
    var par=next_Button.getAttribute("par")
    if(document.querySelector("#stations").value!=="default"){
        fetch_playBack(command,par)
        move_seek_with_playbakButton()
    }else{
        alert("Por favor seleccione una estación")
        console.log("Error")
    }
})

first_Button.addEventListener("click", () =>{
    var command =first_Button.getAttribute("cmd")
    var par=first_Button.getAttribute("par")
    if(document.querySelector("#stations").value!=="default"){
        fetch_playBack(command,par)
        move_seek_with_playbakButton()
    }else{
        alert("Por favor seleccione una estación")
        console.log("Error")
    }
})

last_Button.addEventListener("click", () =>{
    var command = last_Button.getAttribute("cmd")
    var par=last_Button.getAttribute("par")
    if(document.querySelector("#stations").value!=="default"){
        fetch_playBack(command,par)
        move_seek_with_playbakButton()
    }else{
        alert("Por favor seleccione una estación")
        console.log("Error")
    }
})

seek_norm_input.addEventListener("change", () => {
    var value = seek_norm_input.value
    show_value_seek_norm.innerHTML = seek_norm.value
    fetch_seek_norm(value)
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

/**
 * This function is responsible for sending the JSON with the respective command for the playback mode.
 * @param {string} command Receive the following arguments: "play", "stop", "first", "prev", "next", "last"
 * @param {string} par 
 */
async function fetch_playBack(command,par) {
    const response = await fetch(`/system/${document.querySelector("#stations").value}/dhs1/playback`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({cmd:command, par:par})
    })
    console.log({"Ok": response.ok, "Status": response.status, "Message": command+"-"+par})
}

/**
 * This function is responsible for sending the JSON with the respective command for the frame manipulation.
 * @param {Number} value Value captured through input
 */
async function fetch_seek_norm(value){
    const response = await fetch(`/system/${document.querySelector("#stations").value}/dhs1/playback`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({cmd:"seek_norm",par: value/1000.0})
    })
    console.log({"Ok": response.ok, "Status": response.status, "Message": "Seek Norm"})
}

async function move_seek_with_playbakButton(){
    fetch(`/system/${document.querySelector("#stations").value}/dhs1`,{
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
            document.querySelector("#seek_frame_time").innerHTML = (frame_time_input.value/22000.0).toFixed(6)
            frame_time_input.addEventListener("change", async () => {
                document.querySelector("#seek_frame_time").innerHTML = (frame_time_input.value/22000.0).toFixed(6)
                seek("seek_to_time",(frame_time_input.value/22000.0).toFixed(6))
                frame_index_input.value = frame_time_input.value
                document.querySelector("#seek_frame_index").innerHTML = frame_index_input.value
            })
        }
    })
    .catch(err => console.log(err))
}