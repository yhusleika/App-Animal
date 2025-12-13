# 🐾 Registro de Animales Favoritos - Backend con Node.js y Express
📄 Descripción del Proyecto:
Este proyecto es una aplicación web simple, construida utilizando Node.js y el framework Express, que demuestra un flujo de datos básico a través de un sistema de dos vistas interconectadas. El objetivo principal es la implementación de un pequeño servidor backend capaz de recibir datos de un formulario (POST) y renderizar una página de resultados con información personalizada.

🛠️ Tecnologías Utilizadas

Backend: Node.js, Express.js (Framework)

Frontend: HTML5

Estilos: Bootstrap 5 (Para una estructura visual básica)

🚀 Funcionalidad Principal:
La aplicación está diseñada para guiar al usuario a través de un proceso de registro y visualización de su animal favorito.

Flujo de la Aplicación:

1.-El usuario accede a la página principal (/).

2.-Completa un formulario simple, ingresando el nombre de su animal favorito.

3.-El servidor Express (server.js) recibe la solicitud POST con la información enviada.

4.-El servidor procesa el dato y redirige al usuario a la vista de resultados (/resultado).

5.-La página de resultados muestra el nombre del animal, acompañado de un emoji representativo y un dato curioso generado por el backend.

💻 Estructura del Código:
Para facilitar la comprensión y el mantenimiento, el código fuente ha sido documentado.

Comentarios Detallados: El código incluye comentarios internos a lo largo de los archivos clave (server.js, index.html y resultado.html) para explicar la lógica del servidor, el manejo de rutas y la estructura de las vistas HTML.

⚙️ Instalación y Ejecución
Sigue estos comandos para configurar y poner en marcha el servidor localmente.
1. Inicializar el proyecto y crear el archivo package.json:
npm init -y
2. Instalar la dependencia principal (Express):
npm install express
3. Ejecutar el servidor:
node server.js

📚 Recursos y Referencias:
Este proyecto se construyó utilizando los siguientes recursos educativos y documentación oficial:

Curso/Tutorial: Aprende Node.js y Express - Curso desde Cero (freeCodeCamp Español, 2022) URL: https://youtu.be/1hpc70_OoAg

Documentación: Node.js Documentation (Guía oficial) URL: https://nodejs.org/es/docs/

Documentación: Express.js (Documentación 4.x) URL: https://expressjs.com/es/

Documentación: Bootstrap 5 Documentation URL: https://getbootstrap.com/docs/5.3/

✨ Créditos y Reconocimientos:
Se agradece la asistencia de las siguientes herramientas de Inteligencia Artificial para la guia en estructuración y mejora de la redacción y codigo:

Ibaba code Pro desarrollada por CARLOS RAMON BERBECI LUCENA.

Deepseek (Creada por: Liang Wenfeng)
