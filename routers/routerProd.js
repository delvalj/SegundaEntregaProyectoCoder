const express = require("express");
const {Router} = express;
const routerProd = Router();
const multer = require("multer");
const storage = multer({destinantion: "/upload"});
const PORT = process.env.PORT || 8080;

let prodContainer = require('../clases/productoSQLClass')
const {optionsMySQL} = require('../config/options.js')

routerProd.get("/productosSQL", async (req, res, next) => {
    const productos = new prodContainer(optionsMySQL, 'articulos');
    const showProductos = await productos.getAll();
    res.send(showProductos);
});

const productoSubido = storage.fields([
    {titulo: "title", thumbnail: "thumbnail", price: "price", code: 'code'},
]);

routerProd.post("/productosSQL", productoSubido, async (req, res) => {
    let produc = new prodContainer(optionsMySQL, 'usuarios');
    if (
        req.body.titulo === "" ||
        req.body.price === "" ||
        req.body.thumbnail === "" ||
        req.body.code === ""
    ) {
        res.status(400).send({
            error: "No se pudo cargar el producto. Complete los campos vacios.",
        });
    } else {
        await produc.metodoSave(req.body);
        res.redirect(`http://localhost:${PORT}`);
    }
});

module.exports = {routerProd};
