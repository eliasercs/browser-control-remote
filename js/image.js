var play = false

function requestimg() {
    if (play) {
        infoimg()
        .then(res => res.blob())
            .then(data => {
                var file = new File([data], "file.jpeg")
                var urlCreator = window.URL || window.webkitURL
                document.querySelector("#frameImage").setAttribute("src", urlCreator.createObjectURL(file))
            })
            .catch(err => console.log(err))
    }
}

document.querySelector("#play").addEventListener("click", () => {
    if (document.querySelector("#stations").value!=="default"){
        play = true
        setInterval("requestimg()", 250)
    } else {
        alert("You must select a station.")
    }
})

document.querySelector("#stop").addEventListener("click", () => {
    if (document.querySelector("#stations").value!=="default"){
        play = false
        infoimg()
            .then(res => res.blob())
            .then(data => {
                var file = new File([data], "file.jpeg")
                var urlCreator = window.URL || window.webkitURL
                document.querySelector("#frameImage").setAttribute("src", urlCreator.createObjectURL(file))
            })
            .catch(err => console.log(err))
    } else {
        alert("You must select a station.")
    }
})

document.querySelector("#last").addEventListener("click", () => {
    if (document.querySelector("#stations").value!=="default"){
        play = false
        infoimg()
        .then(res => res.blob())
        .then(data => {
            var file = new File([data], "file.jpeg")
            var urlCreator = window.URL || window.webkitURL
            document.querySelector("#frameImage").setAttribute("src", urlCreator.createObjectURL(file))
        })
        .catch(err => console.log(err))
    } else {
        alert("You must select a station.")
    }
})

document.querySelector("#prev").addEventListener("click", () => {
    if (document.querySelector("#stations").value!=="default"){
        play = false
        infoimg()
        .then(res => res.blob())
        .then(data => {
            var file = new File([data], "file.jpeg")
            var urlCreator = window.URL || window.webkitURL
            document.querySelector("#frameImage").setAttribute("src", urlCreator.createObjectURL(file))
        })
        .catch(err => console.log(err))
    } else {
        alert("You must select a station.")
    }
})

document.querySelector("#next").addEventListener("click", () => {
    if (document.querySelector("#stations").value!=="default"){
        play = false
        infoimg()
        .then(res => res.blob())
        .then(data => {
            var file = new File([data], "file.jpeg")
            var urlCreator = window.URL || window.webkitURL
            document.querySelector("#frameImage").setAttribute("src", urlCreator.createObjectURL(file))
        })
        .catch(err => console.log(err))
    } else {
        alert("You must select a station.")
    }
})

document.querySelector("#first").addEventListener("click", () => {
    if (document.querySelector("#stations").value!=="default"){
        play = false
        infoimg()
        .then(res => res.blob())
        .then(data => {
            var file = new File([data], "file.jpeg")
            var urlCreator = window.URL || window.webkitURL
            document.querySelector("#frameImage").setAttribute("src", urlCreator.createObjectURL(file))
        })
        .catch(err => console.log(err))
    } else {
        alert("You must select a station.")
    }
})