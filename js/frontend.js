if (document.querySelector("#stations").value === "default") {
    document.querySelectorAll(".interface").forEach(item => item.classList.add("hide"))
} else {
    document.querySelectorAll(".interface").forEach(item => item.classList.remove("hide"))
    document.querySelector("#alertMessage").classList.add("hide")
}

list = document.querySelectorAll(".list")
const deviceModeSubtitle = document.querySelector("#deviceModeSubtitle")
const playbackSubtitle = document.querySelector("#playbackSubtitle")

function activeList() {
    list.forEach(item => {
        item.classList.remove("active")
        this.classList.add("active")
    })
}

list.forEach(item => item.addEventListener("click", activeList))
list.forEach(item => item.addEventListener("mouseover", activeList))
list.forEach(item => item.addEventListener("mouseout", () => item.classList.remove("active")))

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
document.querySelector("#normalice_value").innerHTML = document.querySelector("#normalice").value
document.querySelector("#seek_by_index_value").innerHTML = document.querySelector("#seek_by_index").value
document.querySelector("#seek_time_value").innerHTML = document.querySelector("#seek_time").value

document.querySelector("#normalice").addEventListener("input",() => {
    document.querySelector("#normalice_value").innerHTML = document.querySelector("#normalice").value
    var pixeles = document.querySelector("#normalice").value/document.querySelector("#normalice").getAttribute("max")
    document.querySelector("#normalice_value").style.left = (pixeles*92.5)+"%"
})

document.querySelector("#seek_by_index").addEventListener("input",() => {
    document.querySelector("#seek_by_index_value").innerHTML = document.querySelector("#seek_by_index").value
    var pixeles = document.querySelector("#seek_by_index").value/document.querySelector("#seek_by_index").getAttribute("max")
    document.querySelector("#seek_by_index_value").style.left = (pixeles*92.5)+"%"
})

document.querySelector("#seek_time").addEventListener("input", () => {
    document.querySelector("#seek_time_value").innerHTML = document.querySelector("#seek_time").value
    var pixeles = document.querySelector("#seek_time").value/document.querySelector("#seek_time").getAttribute("max")
    document.querySelector("#seek_time_value").style.left = (pixeles*92.5)+"%"
})