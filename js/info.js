const infostate = document.querySelector("#infostate")

document.querySelector("#infoButton").addEventListener("click", () => {

  fetch(`/system/${document.querySelector("#stations").value}/dhs1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ cmd: "info", par: "" })
  })
    .then(res => res.json())
    .then(data => {
      const { status, mode, time, fri, frt, frc } = data
      console.log({ "status": status })
      var frame = `
      <tr>
        <td>Frame Index</td>
        <td>${fri}</td>
      </tr>
    <tr>
      <td>Frame Time</td>
      <td>${frt}</td>
    </tr>
    <tr>
      <td>Frame Count</td>
      <td>${frc}</td>
    </tr>`

      infostate.innerHTML = `
            <tr>
              <td>Status</td>
              <td>${status}</td>
            </tr>
            <tr>
              <td>Mode</td>
              <td>${mode}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>${time}</td>
            </tr>
            ${mode === "playback" ? frame : "" }
            `
    })
})