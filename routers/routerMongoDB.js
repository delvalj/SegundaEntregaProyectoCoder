const express = require("express");
const {Router} = express;
const routerMongoDB = Router();

let mongoDBContainer = require("../clases/mongoDBClass.js");

/**
 * Metodo para obtener Todos los Usuarios y mostarrlos porpantalla
 */
routerMongoDB.get("/mongoDB", (req, res, next) => {
    const mostrarProductos = async () => {
        const productos = new mongoDBContainer("ecommerce", "productos");
        const showProductos = await productos.getAll();
        res.send(showProductos);
    };
    mostrarProductos();
});

/**
 * Obtengo un producto segun ID y mostrarlo por pantalla
 */
routerMongoDB.get("/mongodb/:id", (req, res, next) => {
    let id = (req.params.id);
    const mostrarProdID = async () => {
    const productos = new mongoDBContainer("ecommerce", "productos");
        const mostrarID = await productos.getById(id);
        res.send(mostrarID);
    };
    mostrarProdID();
});

/**
 * Subo un producto Nuevo
 */

routerMongoDB.post("/mongodb", async (req, res, next) => {
    const subirProduct = async () => {
        const productos = new mongoDBContainer("ecommerce", "productos");
            await productos.metodoSave(req.body);
            return res.send(req.body);
        next();
    };
subirProduct();
});

/**
 * Actualizo un registro segun el Id que recibimos por param.
 */

routerMongoDB.put("/mongodb/:id", (req, res, next) => {
    let id = (req.params.id);
    const mostrarProdID = async () => {
    const productos = new mongoDBContainer("ecommerce", "productos");
        const mostrarID = await productos.updateById(id, req.body);
        res.send(mostrarID);
    };
    mostrarProdID();
});

/**
 * Borra un usuario segun su id, que a su vez que es obtenido a travez de params
 */

 routerMongoDB.delete("/mongodb/:id", (req, res, next) => {
    let id = (req.params.id);
    const mostrarProdID = async () => {
    const productos = new mongoDBContainer("ecommerce", "productos");
        await productos.deleteById(id);
        res.send("Producto Eliminado!");
    };
    mostrarProdID();
});

module.exports = {routerMongoDB};
