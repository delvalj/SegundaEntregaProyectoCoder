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

/**
 * Metodo para 
 */
routerFirebase.post("/firebase", async (req, res, next) => {
  const subirUsuario = async () => {
    const usuarios = new FirebaseContainer("usuarios");
    await usuarios.metodoSave(req.body);
  };
  next();
  subirUsuario();
});


routerFirebase.get("/firebase/:doc", (req, res, next) => {
    let doc = (req.params.doc);
    const mostrarProdID = async () => {
      const showUsuarios = await usuarios.getById(doc);
        res.send(showUsuarios);
    };  
    mostrarProdID();
});

routerFirebase.put("/firebase/:doc", (req, res, next) => {
  let doc = (req.params.doc);
  const mostrarProdID = async () => {
    const showUsuarios = await usuarios.updateById(doc, req.body);
    console.log('Usuario Actualizado')
      res.send(showUsuarios);
      return;
  };  
  mostrarProdID();
});

routerFirebase.delete("/firebase/:doc", (req, res, next) => {
    let doc = (req.params.doc);
    const eliminoPorID = async () => {
      const usuarios = new FirebaseContainer("usuarios");
        await usuarios.deleteById(doc);
    };
    eliminoPorID();
    next();
})

module.exports = { routerFirebase };
