const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');

//Usamos async y await ya que esa peticion tomara tiempo
router.get('/', async(req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //Ya que se devolveran como string, debemos convertirlo en json
    const users = await response.json();
    res.json(users);

});

module.exports = router;