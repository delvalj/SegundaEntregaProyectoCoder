const express = require("express");
const {Router} = express;
const routerMongoDB = Router();

const DaoProduct = require ("../daos/productos/productosDaoMongo");

/**
 * Metodo para obtener Todos los Usuarios y mostarrlos porpantalla
 */
routerMongoDB.get("/mongoDB", (req, res, next) => {
    const mostrarProductos = async () => {
        const products = new DaoProduct();
        const showProductos = await products.getAll();
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
        const products = new DaoProduct();
    // const productos = new mongoDBContainer("ecommerce", "productos");
        const mostrarID = await products.getById(id);
        res.send(mostrarID);
    };
    mostrarProdID();
});

/**
 * Subo un producto Nuevo
 */

routerMongoDB.post("/mongodb", async (req, res, next) => {
    const subirProduct = async () => {
        const products = new DaoProduct();
        // const productos = new mongoDBContainer("ecommerce", "productos");
            await products.metodoSave(req.body);
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
        const products = new DaoProduct();
    // const productos = new mongoDBContainer("ecommerce", "productos");
        const mostrarID = await products.updateById(id, req.body);
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
        const products = new DaoProduct();
    // const productos = new mongoDBContainer("ecommerce", "productos");
        await products.deleteById(id);
        res.send("Producto Eliminado!");
    };
    mostrarProdID();
});

module.exports = {routerMongoDB};
