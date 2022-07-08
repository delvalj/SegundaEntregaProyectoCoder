const express = require("express");
const { Router } = express;
const routerFirebase = Router();
const PORT = 8080;

let FirebaseContainer = require("../clases/firebaseClass.js");
const productos = new FirebaseContainer("productos");

/**
 * Metodo para obtener todos los usuarios de firebase y mostrarlos por pantalla
 */
routerFirebase.get("/firebase", (req, res, next) => {
  const mostraProductos = async () => {
    const showProductos = await productos.getAll();
    res.send(showProductos);
  };
  mostraProductos();
});

/**
 * Metodo para 
 */
routerFirebase.post("/firebase", async (req, res, next) => {
  const subirProducto = async () => {
    const producto = new FirebaseContainer("productos");
    await producto.metodoSave(req.body);
  };
  next();
  subirProducto();
});


routerFirebase.get("/firebase/:doc", (req, res, next) => {
    let doc = (req.params.doc);
    const mostrarProdID = async () => {
      const showProductos = await productos.getById(doc);
        res.send(showProductos);
    };  
    mostrarProdID();
});

routerFirebase.put("/firebase/:doc", (req, res, next) => {
  let doc = (req.params.doc);
  const mostrarProdID = async () => {
    const showProductos = await productos.updateById(doc, req.body);
    console.log('Producto Actualizado')
      res.send(showProductos);
      return;
  };  
  mostrarProdID();
});

routerFirebase.delete("/firebase/:doc", (req, res, next) => {
    let doc = (req.params.doc);
    const eliminoPorID = async () => {
      const producto = new FirebaseContainer("producto");
        await producto.deleteById(doc);
    };
    eliminoPorID();
    next();
})

module.exports = { routerFirebase };
