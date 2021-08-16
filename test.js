const fs= require("fs");

fs.writeFile("./texto.txt", "linea uno",function(err){
    if (err){
        console.log(err);
    }
    console.log("archivo creado");
});

console.log("hola");