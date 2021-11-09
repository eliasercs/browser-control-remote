var play = false
const infostate = document.querySelector("#infostate")

function requestinfo() {
    if (play) {
        info()
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
    }
}

document.querySelector("#play").addEventListener("click", () => {
    if (document.querySelector("#stations").value !== "default") {
        play = true
        setInterval("requestinfo()", 250)
    } else {
        alert("You must select a station.")
    }
})

document.querySelector("#stop").addEventListener("click", () => {
    if (document.querySelector("#stations").value !== "default") {
        play = false
        info()
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
            .catch(err => console.log(err))
    } else {
        alert("You must select a station.")
    }
})


document.querySelector("#last").addEventListener("click", () => {
    if (document.querySelector("#stations").value !== "default") {
        play = false
        info()
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
            .catch(err => console.log(err))
    } else {
        alert("You must select a station.")
    }
})

document.querySelector("#prev").addEventListener("click", () => {
    if (document.querySelector("#stations").value !== "default") {
        play = false
        info()
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
            .catch(err => console.log(err))
    } else {
        alert("You must select a station.")
    }
})


document.querySelector("#next").addEventListener("click", () => {
    if (document.querySelector("#stations").value !== "default") {
        play = false
        info()
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
            .catch(err => console.log(err))
    } else {
        alert("You must select a station.")
    }
})

document.querySelector("#first").addEventListener("click", () => {
    if (document.querySelector("#stations").value !== "default") {
        play = false
        info()
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
            .catch(err => console.log(err))
    } else {
        alert("You must select a station.")
    }
})