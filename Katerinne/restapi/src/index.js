const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
//Si hay un port que sea utilizado, sino se usara 3000
app.set('port', process.env.PORT || 3000);

// middlewares: funcion que procesa datos antes de que el sv los reciba
app.use(morgan('dev'));
//Para formatos json y entender los datos que llegan de input
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));


//Escucha en el puerto 3000
app.listen(app.get('port'), () => {
    console.log(`Escuchando port ${app.get('port')}`);
});