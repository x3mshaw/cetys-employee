/**
 * Desarrolle un programa en Node.js donde la primer version del API regresa el id y nombre del empleado.
 * La segunda version del API, regresara id, nombre y apellido.
 * Cada version del API empleados tendra su propia ruta en el URL.
 * Utilice el siguiente ejemplo como apoyo.
 * **/

// Request packages
var express = require("express");
var app = express();

// Declare an array of JSON objects
const employees1 = [
    { id: 1, name: "John" },
    { id: 2, name: "Peter" }
];

// Route to employees v1
app.get('/v1/employees', function (req, res) {
    // Print JSON array
    res.json({ employees1 });
});

var PORT = process.env.port || 3000;

app.listen(PORT, function () {
    console.log(`App running in port ${PORT}`);
});


