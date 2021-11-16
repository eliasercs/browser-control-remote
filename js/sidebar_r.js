//nav bar right
const nav2=document.querySelector(".navigation2")
const image = document.querySelector("#image")
const capture=document.querySelector("#capture")
const color=document.querySelector("#color")
const camera = document.querySelector("#camera")
const tone_curve_title = document.querySelector("#tone_curve")
const content=document.querySelector("#content")
const check_bar_right = document.querySelector("#check_bar_right")

check_bar_right.addEventListener("change",()=>{
    if (document.getElementById("stations").value !== "default") {
        if (check_bar_right.checked) {
            nav2.classList.remove("hide")
            image.classList.remove("hide")
            capture.classList.remove("hide")
            color.classList.remove("hide")
            camera.classList.remove("hide")
            tone_curve_title.classList.remove("hide")
            content.classList.add("content_just")
            nav2.classList.add("navigation2-hover")
            check_bar_right.classList.add("check_bar_right_just")
        } else {
            nav2.classList.add("hide")
            image.classList.add("hide")
            capture.classList.add("hide")
            color.classList.add("hide")
            camera.classList.add("hide")
            tone_curve_title.classList.add("hide")
            content.classList.remove("content_just")
            check_bar_right.classList.remove("check_bar_right_just")
        }
    }
})