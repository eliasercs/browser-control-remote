const express = require("express"), app = express(), port = 4000, products = require("./api/products")

app.use(express.json())
app.use("/api/products",products)

app.listen(port, ()=>{
    console.log(`Aplicación ejecutando en http://127.0.0.1:${port}`)
})