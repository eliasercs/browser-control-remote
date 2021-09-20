const infoButton = document.querySelector("#info")
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
            const { status, mode, time, fri, frt, frc } = data
            console.log({"status":status})
            if (data.mode == 'playback') {
                infostate.innerHTML =`
        <table class="table table table-hover table-light" border:"1">
        <thead>          
        </thead>
        <tbody>
          <tr class="table-success">
            <th scope="row"></th>
            <td>Status</td>
            <td>${status}</td>
            
          </tr>
          <tr class="table-success">
            <th scope="row"></th>
            <td>Mode</td>
            <td>${mode}</td>
            
          </tr>
          <tr class="table-success">
            <th scope="row"></th>
            <td>Time</td>
            <td>${time}</td>
           
          </tr>
          <tr class="table-success">
            <th scope="row"></th>
            <td>Frame Index</td>
            <td>${fri}</td>
           
          </tr>
          <tr class="table-success">
            <th scope="row"></th>
            <td>Frame Time</td>
            <td>${frt}</td>
           
          </tr>
          <tr class="table-success">
            <th scope="row"></th>
            <td>Frame Count</td>
            <td>${frc}</td>
           
          </tr>
        </tbody>
      </table>`
            } else {
        infostate.innerHTML =`<table class="table table table-hover table-light" border:"1">
        <thead>          
        </thead>
        <tbody>
          <tr class="table-success">
            <th scope="row"></th>
            <td>Status</td>
            <td>${status}</td>
            
          </tr>
          <tr class="table-success">
            <th scope="row"></th>
            <td>Mode</td>
            <td>${mode}</td>
            
          </tr>
          <tr class="table-success">
            <th scope="row"></th>
            <td>Time</td>
            <td>${time}</td>
           
          </tr>
        </tbody>
      </table>`
            }
        })
  })