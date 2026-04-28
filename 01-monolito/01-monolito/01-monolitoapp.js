const express = require("express");
const app = express();

app.use(express.json());

let productos = [
  { id: 1, nombre: "Laptop", precio: 2500 },
  { id: 2, nombre: "Mouse", precio: 80 }
];

app.get("/", (req, res) => {
  res.send("Aplicación monolítica funcionando");
});

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.post("/productos", (req, res) => {
  const nuevoProducto = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio
  };

  productos.push(nuevoProducto);
  res.json(nuevoProducto);
});

app.listen(3000, () => {
  console.log("Servidor monolítico corriendo en http://localhost:3000");
});
