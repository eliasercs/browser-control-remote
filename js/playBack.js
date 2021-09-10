//playBack

const play_Button = document.querySelector("#play")
const stop_Button = document.querySelector("#stop")
const prev_Button = document.querySelector("#prev")
const next_Button = document.querySelector("#next")
const first_Button = document.querySelector("#first")
const last_Button = document.querySelector("#last")

const seek_norm_input = document.querySelector("#seek_norm")
const show_value_seek_norm = document.querySelector("#value")
show_value_seek_norm.innerHTML = seek_norm.value

play_Button.addEventListener("click", () =>{
    var command =play_Button.getAttribute("cmd")
    var par=play_Button.getAttribute("par")
    fetch_playBack(command,par)
})

stop_Button.addEventListener("click", () =>{
    var command =stop_Button.getAttribute("cmd")
    var par=stop_Button.getAttribute("par")
    fetch_playBack(command,par)
})

prev_Button.addEventListener("click", () =>{
    var command =prev_Button.getAttribute("cmd")
    var par=prev_Button.getAttribute("par")
    fetch_playBack(command,par)
})

next_Button.addEventListener("click", () =>{
    var command =next_Button.getAttribute("cmd")
    var par=next_Button.getAttribute("par")
    fetch_playBack(command,par)
})

first_Button.addEventListener("click", () =>{
    var command =first_Button.getAttribute("cmd")
    var par=first_Button.getAttribute("par")
    fetch_playBack(command,par)
})

last_Button.addEventListener("click", () =>{
    var command = last_Button.getAttribute("cmd")
    var par=last_Button.getAttribute("par")
    fetch_playBack(command,par);
})

seek_norm_input.addEventListener("change", () => {
    var value = seek_norm_input.value
    show_value_seek_norm.innerHTML = seek_norm.value
    fetch_seek_norm(value)
})

async function fetch_playBack(command,par) {
    const response = await fetch("system/station1/dhs1/playback",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({cmd:command, par:par})
    })
    console.log({"Ok": response.ok, "Status": response.status, "Message": command+"-"+par})
}

async function fetch_seek_norm(value){
    const response = await fetch("system/station1/dhs1/playback",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({cmd:"seek_norm",par: value/1000.0})
    })
    console.log({"Ok": response.ok, "Status": response.status, "Message": "Seek Norm"})
}