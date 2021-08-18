const express = require("express"), router = express.Router(), db = require("../db/db")

//Obtener una lista con todos los productos
router.get("/",(req,res)=>{
    db.query("SELECT * FROM products",(error,results, fields)=>{
        res.json(results)
    })
})

//Obtener un producto en específico
router.get("/:id",(req,res)=>{
    const {id} = req.params
    db.query("SELECT * FROM products WHERE id=?",[id],(error,results,fields)=>{
        res.json(results[0])
    })
})

//Almacenar un nuevo producto
router.post("/",(req,res)=>{
    const { name, description, price, amount } = req.body
    db.query("INSERT INTO products (name,description,price,amount) VALUES (?,?,?,?)",[name,description,price,amount],(err)=>{
        err ? res.send(err.sqlMessage) : res.send("Producto agregado satisfactoriamente")
    })
})

//Eliminar un producto
router.delete("/:id",(req, res)=>{
    const {id} = req.params
    db.query("DELETE FROM products WHERE id=?",[id],(error,results,fields)=>{
        error ? res.send(error.sqlMessage) : res.send("Producto eliminado satisfactoriamente")
    })
})

//Actualizar o modificar un determinado producto
router.put("/:id",(req,res)=>{
    const {id} = req.params
    const {name, description, price, amount} = req.body
    db.query("UPDATE products SET name=?, description=?, price=?, amount=? WHERE id=?",[name,description,price,amount,id],(err)=>{
        err ? res.send(err.sqlMessage) : res.send("Producto actualizado con éxito")
    })
})

module.exports = router