var lista = ["e1","e2","e3"]

lista.map((item, key) => {
    var option = document.createElement("option")
    option.value = key
    option.text = item
    document.getElementById("stations").appendChild(option)
})