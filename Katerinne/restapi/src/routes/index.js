const { Router } = require('express');
const router = Router();


router.get('/test', (req, res) => {
    //res.json({ 'Title': " Hello word" });
    const data = {
        "name": "Fazt",
        "website": "faztweb.com"
    };
    //Devuelve dato 
    res.json(data);
});

//Para exportarlo
module.exports = router;