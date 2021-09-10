const infoButton = document.querySelector("#info")
    //const infoStateDiv = document.querySelector(".infoState")
const infostate = document.querySelector("#infostate")

infoButton.addEventListener("click", () => {
    var cmd = infoButton.getAttribute("cmd")
    var par = infoButton.getAttribute("par")

    fetch("/system/station1/dhs1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ cmd: cmd, par: par })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.mode)
            console.log(cmd)


            const { status, mode, time, fri, frt, frc } = data
            if (data.mode == 'playback') {
                infostate.innerHTML = `Status: ${status}
                ,Mode: ${mode},
                Time: ${time},
                Frame index: ${fri},
                Frame Time: ${frt},
                Frame count: ${frc}`
            } else {

                infostate.innerHTML = `Status: ${status},Mode: ${mode},Time: ${time}`
            }
        })
})