//devicemodes (record setup)

const record_button = document.querySelector('#record');
const setup_button = document.querySelector('#setup');

record_button.addEventListener("click", async() =>{
    var command =record_button.getAttribute("cmd")
    var par=record_button.getAttribute("par")

    fetch_device(command,par)
})

setup_button.addEventListener("click", async() =>{
    var command =setup_button.getAttribute("cmd")
    var par=setup_button.getAttribute("par")

    fetch_device(command,par)
})


//func

function fetch_device(command,par) {
    command=command
    par=par
    fetch("system/station1/dhs1",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({cmd:command, par:par})
    })
}