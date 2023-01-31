const path = require('path');
const express = require("express");
const cors = require("cors");
const fs = require('fs'); 
const app = express();
const db = require("./src/models");

var corsOptions = {
    origin: ['http://localhost:8081', 'http://127.0.0.1:5500']
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routePath="./src/routes/";

fs.readdirSync(routePath).forEach(function(file) {
    require(routePath + file)(app);
});

db.sequelize.sync().then(() => {
    console.log("Sincronizado con la base de datos.");
}).catch((err) => {
    console.log("Fallo al sincronizar con la base de datos: " + err.message);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}.`);
});
