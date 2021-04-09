const express = require('express'); // Requiere express 
const app = express(); // Inicializa express dentro de una constante llamada app



// La app recibe las peticiones en el puerto 3000
app.listen(3000, () => {
    console.log("Server on port 3000")
});