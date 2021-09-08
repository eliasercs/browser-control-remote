const terminate_button = document.querySelector("#terminate")

terminate_button.addEventListener("click",async ()=>{
    var command = terminate_button.getAttribute("cmd")
    const response = await fetch("/op/sys",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({cmd:command, par: ""})
    })
    console.log("Ok:",response.ok,"Status:",response.status)
})