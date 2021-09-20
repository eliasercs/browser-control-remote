
// Get the button with the id "terminate"
const terminate_button = document.querySelector("#terminate");

/**
 * When the button is clicked, it obtains the value of the "cmd" attribute and by means of the "POST" method,
 * it communicates the information with the API to terminate the software.
 */
terminate_button.addEventListener("click",async ()=>{
    var command = terminate_button.getAttribute("cmd");
    const response = await fetch("/op/sys",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({cmd:command, par: ""})
    });
    console.log({"Ok": response.ok,"Status": response.status, "Message": "Shutdown"});
    alert(response.ok ? "Shutdown": "Error");
})