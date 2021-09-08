const infoButton = document.querySelector("#info")
const infoStateDiv = document.querySelector(".infoState")

infoButton.addEventListener("click", () => {
    var cmd = infoButton.getAttribute("cmd")
    var par = infoButton.getAttribute("par")

    fetch("/system/station1/dhs1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({cmd: cmd, par: par})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const {status, mode, time} = data
        infoStateDiv.innerHTML = `Status: ${status},Mode: ${mode},Time: ${time}`
    })
})