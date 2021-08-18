const mysql = require("mysql"), connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce-app"
})

connection.connect((err)=>{
    err ? console.log("[DATABASE ERROR]: "+err.message) : console.log("[DATABASE MESSAGE]: "+connection.state)
})

module.exports = connection