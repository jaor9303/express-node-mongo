const express = require('express'); // Requiere express
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express(); // Inicializa express dentro de una constante llamada app


/**
 *   IMPORTING ROUTES
 */

const indexRoutes = require('./routes/index')


/**
 *   SETTING
 */

// Esta configuración toma el puerto del SO, en caso de no existir le coloca el puerto 3000
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/**
 *   CONNECTING TO DB
 */

mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log("DB connected"))
    .catch(err => console.log(err));


/**
 *   MIDDLEWARES
 *   Los middlewares son las funciones que se van a ejcutar antes de que se llegue a las rutas
 */

// Morgan se usa para mostrar los datos por la consola antes que llegue a las rutas
app.use(morgan('dev'));
/* La función urlencoded sirve para que el servidor entienda los datos que son enviados
   desde el cliente el {extended: false} sirve para indicar que solo se va a recibir texto
*/
app.use(express.urlencoded({extended: false}))

/**
 *   ROUTES
 */

app.use('/', indexRoutes);

/**
 *   STAARTING ON SERVER
 */
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});