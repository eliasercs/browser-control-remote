async function seek(cmd, par) {
    const response = await fetch(`/system/${document.querySelector("#stations").value}/dhs1/playback`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ cmd: cmd, par: par })
    })
    console.log({ "Ok": response.ok, "Status": response.status, "Message": cmd + "-" + par })
}

async function terminate() {
    const response = await fetch("/op/sys", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ cmd: "terminate", par: "" })
    })
    console.log({ "Ok": response.ok, "Status": response.status, "Message": "Terminate" })
}

async function playback(cmd, par) {
    const response = await fetch("/system/station1/dhs1/playback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ cmd: cmd, par: par })
    })
    console.log({ "Ok": response.ok, "Status": response.status, "Message": cmd + "-" + par })
}

async function info() {
    const response = await fetch(`/system/${document.querySelector("#stations").value}/dhs1`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ cmd: "info", par: "" })
    })
    return response
}

async function infoimg() {
    let element=document.getElementById("onoverlay")
    var bol=element.checked
    if (bol)
        url=`/system/${document.querySelector("#stations").value}/dhs1/image?overlay`
    if(!bol)
        url=`/system/${document.querySelector("#stations").value}/dhs1/image`
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response
}