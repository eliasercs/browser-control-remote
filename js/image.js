const infodiv = document.querySelector("#frameRescatado")

var play = false

function requestimg() {
    if (play) {
        infoimg()

        .then(res => res.blob())
            .then(data => {
                //console.log(data.fri)
                console.log("data", data)
                var file = new File([data], "file.jpeg")
                console.log(file)
                var urlCreator = window.URL || window.webkitURL
                document.querySelector("#frameRescatado").setAttribute("src", urlCreator.createObjectURL(file))

            })
            .catch(err => console.log(err))
    }
}


play_button.addEventListener("click", () => {
    play = true
    setInterval("requestimg()", 10050)
})
stop_button.addEventListener("click", () => {
    play = false
    infoimg()
        .then(res => res.blob())
        .then(data => {
            var file = new File([data], "file.jpeg")
            console.log(file)
            var urlCreator = window.URL || window.webkitURL
            document.querySelector("#frameRescatado").setAttribute("src", urlCreator.createObjectURL(file))
        })
        .catch(err => console.log(err))
})