if (document.querySelector("#stations").value === "default") {
    document.querySelectorAll(".interface").forEach(item => item.classList.add("hide"))
} else {
    document.querySelectorAll(".interface").forEach(item => item.classList.remove("hide"))
    document.querySelector("#alertMessage").classList.add("hide")
}

list = document.querySelectorAll(".list")
const deviceModeSubtitle = document.querySelector("#deviceModeSubtitle")
const playbackSubtitle = document.querySelector("#playbackSubtitle")

document.querySelector(".navigation").addEventListener("mouseover", () => {
    document.querySelector(".body").classList.add("navigation-hover")
    deviceModeSubtitle.classList.remove("hide")
    playbackSubtitle.classList.remove("hide")
})

document.querySelector(".navigation").addEventListener("mouseout", () => {
    document.querySelector(".body").classList.remove("navigation-hover")
    deviceModeSubtitle.classList.add("hide")
    playbackSubtitle.classList.add("hide")
})

document.querySelector("#stations").addEventListener("change", () => {
    if (document.querySelector("#stations").value === "default") {
        document.querySelectorAll(".interface").forEach(item => item.classList.add("hide"))
        document.querySelector("#alertMessage").classList.remove("hide")
    } else {
        document.querySelectorAll(".interface").forEach(item => item.classList.remove("hide"))
        document.querySelector("#alertMessage").classList.add("hide")
    }
})

// Slider
//document.querySelector("#normalice_value").innerHTML = document.querySelector("#normalice").value
//document.querySelector("#seek_by_index_value").innerHTML = document.querySelector("#seek_by_index").value
//document.querySelector("#seek_time_value").innerHTML = document.querySelector("#seek_time").value

document.querySelector("#normalice").addEventListener("input",() => {
    document.querySelector("#normalice_value").innerHTML = document.querySelector("#normalice").value
    var pixeles = document.querySelector("#normalice").value/document.querySelector("#normalice").getAttribute("max")
    document.querySelector("#normalice_value").style.left = (pixeles*92.5)+"%"
})

document.querySelector("#seek_by_index").addEventListener("input",() => {
    document.querySelector("#seek_by_index_value").innerHTML = document.querySelector("#seek_by_index").value
    var pixeles = document.querySelector("#seek_by_index").value/document.querySelector("#seek_by_index").getAttribute("max")
    document.querySelector("#seek_by_index_value").style.left = (pixeles*92.5)+"%"

    document.querySelector("#seek_time_value").innerHTML = document.querySelector("#seek_time").value
    var pixeles = document.querySelector("#seek_time").value/document.querySelector("#seek_time").getAttribute("max")
    document.querySelector("#seek_time_value").style.left = (pixeles*92.5)+"%"
})

document.querySelector("#seek_time").addEventListener("input", () => {
    document.querySelector("#seek_time_value").innerHTML = document.querySelector("#seek_time").value
    var pixeles = document.querySelector("#seek_time").value/document.querySelector("#seek_time").getAttribute("max")
    document.querySelector("#seek_time_value").style.left = (pixeles*92.5)+"%"

    document.querySelector("#seek_by_index_value").innerHTML = document.querySelector("#seek_by_index").value
    var pixeles = document.querySelector("#seek_by_index").value/document.querySelector("#seek_by_index").getAttribute("max")
    document.querySelector("#seek_by_index_value").style.left = (pixeles*92.5)+"%"
})

// Get a list of stations
fetch("/system/stations")
.then(res => res.json())
.then(data => {
    data.station.map(item => {
        var option = document.createElement("option")
        option.value = item.id
        option.text = item.id
        document.getElementById("stations").appendChild(option)
    })
})
.catch(err => console.log(err))

// Update input[range]

document.getElementById("width").addEventListener("input",() => {
    if (document.getElementById("stations").value!=="default") {
        document.getElementById("widthValue").value = document.getElementById("width").value
    }
})

document.getElementById("height").addEventListener("input",() => {
    if (document.getElementById("stations").value!=="default") {
        document.getElementById("heightValue").value = document.getElementById("height").value
    }
})

document.getElementById("left").addEventListener("input",() => {
    if (document.getElementById("stations").value!=="default") {
        document.getElementById("leftValue").value = document.getElementById("left").value
    }
})

document.getElementById("right").addEventListener("input",() => {
    if (document.getElementById("stations").value!=="default") {
        document.getElementById("rightValue").value = document.getElementById("right").value
    }
})