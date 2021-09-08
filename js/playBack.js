//playBack

const play_Button = document.querySelector("#play")
const stop_Button = document.querySelector("#stop")
const prev_Button = document.querySelector("#prev")
const next_Button = document.querySelector("#next")
const first_Button = document.querySelector("#first")
const last_Button = document.querySelector("#last")

play_Button.addEventListener("click", async() =>{
    var command =play_Button.getAttribute("cmd")
    var par=play_Button.getAttribute("par")

    fetch_playBack(command,par)
})
stop_Button.addEventListener("click", async() =>{
    var command =stop_Button.getAttribute("cmd")
    var par=stop_Button.getAttribute("par")

    fetch_playBack(command,par)
})

prev_Button.addEventListener("click", async() =>{
    var command =prev_Button.getAttribute("cmd")
    var par=prev_Button.getAttribute("par")

    fetch_playBack(command,par)
})
next_Button.addEventListener("click", async() =>{
    var command =next_Button.getAttribute("cmd")
    var par=next_Button.getAttribute("par")

    fetch_playBack(command,par)
})
first_Button.addEventListener("click", async() =>{
    var command =first_Button.getAttribute("cmd")
    var par=first_Button.getAttribute("par")

    fetch_playBack(command,par)
})
last_Button.addEventListener("click", async() =>{
    var command =last_Button.getAttribute("cmd")
    var par=last_Button.getAttribute("par")

    fetch_playBack(command,par)
})



function fetch_playBack(command,par) {
    command=command
    par=par
    fetch("system/station1/dhs1/playback",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({cmd:command, par:par})
    })
}