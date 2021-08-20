// primer test

const {Router}= require('express');

const router= Router();

router.get('/test',(req,res)=> {
    const data={
        "name":"Jean p",
        "face":"3w.face.com/paulcitronico"
    };
    res.json(data);
});

module.exports=router;