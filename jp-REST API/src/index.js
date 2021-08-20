// tutorial de fazt desde el sitio https://www.youtube.com/watch?v=bK3AJfs7qNY
const express = require('express');
const app= express();
const morgan= require('morgan');

//setting
// process.env.PORT valida si existe un puerto sino usa el 3000
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares **sistema de software que ofrece servicios y funciones para las aplicaciones**

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));

// inicando el servidor

app.listen(app.get('port'), ()=> {
    // se utiliza comilla invertida para obtener codigo mas limpio
    console.log(`servidor en el puerto ${app.get('port')}`);
});