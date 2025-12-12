// Importar módulos necesarios
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para parsear datos del formulario
app.use(express.urlencoded({ extended: true })); //Lee los datos del formulario
app.use(express.static('public')); // Servir archivos estáticos'

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Ruta para procesar el formulario
app.post('/mostrar-animal', (req, res) => {
    const animal = req.body.animal; // Obtener el animal del formulario
    // Redirigir a la página de resultado con el parámetro
    res.redirect(`/resultado?animal=${encodeURIComponent(animal)}`);
});

// Ruta para la página de resultado
app.get('/resultado', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/resultado.html'));
});

// API para obtener el animal (usada por resultado.html)
app.get('/api/animal', (req, res) => {
    const animal = req.query.animal || '';
    res.json({ animal: animal });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});