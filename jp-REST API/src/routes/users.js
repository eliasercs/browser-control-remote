//obtención de datos de servicio web

const {Router, response}=require('express');
const router=Router();

const fetch = require('node-fetch');

router.get('/', async(req, res) => {
    // peticion asincrona
    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    const users=await response.json();
    res.json(users);
    /*console.log(users);
    res.send('users');*/

});

module.exports =router;