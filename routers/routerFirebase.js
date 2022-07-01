const express = require("express");
const { Router } = express;
const routerFirebase = Router();
const PORT = 8080;

let FirebaseContainer = require("../clases/firebaseClass.js");
const usuarios = new FirebaseContainer("usuarios");

/**
 * Metodo para obtener todos los usuarios de firebase y mostrarlos por pantalla
 */
routerFirebase.get("/firebase", (req, res, next) => {
  const mostraUsuarios = async () => {
    const showUsuarios = await usuarios.getAll();
    res.send(showUsuarios);
  };
  mostraUsuarios();
});

routerFirebase.post("/firebase", async (req, res, next) => {
  const subirUsuario = async () => {
    const usuarios = new FirebaseContainer("usuarios");
    await usuarios.metodoSave(req.body);
  };
  next();
  subirUsuario();
});

// routerFirebase.get("/firebase/:id", (req, res, next) => {
//     let id = (req.params.id);
//     const mostrarProdID = async () => {
//       const showUsuarios = await usuarios.getById(id);
//         res.send(showUsuarios);
//     };
//     mostrarProdID();
// });

// const productoSubido = storage.fields([
//     {
//         title: "title",
//         price: "price",
//         thumbnail: "thumbnail",
//         description: "descripcion",
//         codigo: null,
//         stock: null
//     },
// ]);



// routerCarrito.delete("/carrito/:id", (req, res) => {
//     let id = parseInt(req.params.id);
//     const eliminoPorID = async () => {
//         const productos = new carritoContainer("carrito.txt");
//         const mostrarID = await productos.deleteById(id);
//         res.send(`elemento con el ${id} eliminado`);
//     };
//     eliminoPorID();
// })

module.exports = { routerFirebase };
