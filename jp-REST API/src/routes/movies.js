const {Router}=require('express');
const router=Router();
const _=require('underscore');

const movies=require('../sample.json');
//console.log(movies);

router.get('/',(req,res)=> {
    res.json(movies);
});

// agregar 
router.post('/',(req,res)=> {
    const {titulo,director,año,clasificación}=req.body;
    if(titulo && director && año && clasificación) {
        //res.json("guardado");
        const id=movies.length +1;
        const newMobie={...req.body,id};
        console.log(newMobie);
        movies.push(newMobie);
        res.json(movies);
    }else
        //mensaje de error
        res.status(500).json({error:'hubo un error'});
});

// eliminar
router.delete('/:id', (req, res) => {
    const {id}=req.params;
    //console.log(req.params);
    _.each(movies,(movie,i) => {
    if (movie.id==id) {
        movies.splice(i,1);
    }
    });
    res.send(movies);
});

// modificar
router.put('/:id', (req, res) => {
    const {id}=req.params;
    const {titulo,director,año,clasificación}=req.body;
    if (titulo && director && año && clasificación) {
        _.each(movies,(movie,i) => {
            if (movie.id==id) {
                movie.titulo=titulo;
                movie.director=director;
                movie.año=año;
                movie.clasificación=clasificación;
    
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error:"error al actualizar los datos"});
    }
});

module.exports=router;