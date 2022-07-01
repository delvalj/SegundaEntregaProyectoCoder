const express = require("express");
const {Router} = express;
const routerMongoDB = Router();
const multer = require("multer");
const storage = multer({destinantion: "/upload"});

let mongoDBContainer = require("../clases/mongoDBClass.js");

routerMongoDB.get("/mongoDB", (req, res, next) => {
    const mostrarProductos = async () => {
        const productos = new mongoDBContainer("ecommerce", "usuarios");
        const showProductos = await productos.getAll();
        res.send(showProductos);
    };
    mostrarProductos();
});

routerMongoDB.get("/mongodb/:id", (req, res, next) => {
    let id = (req.params.id);
    const mostrarProdID = async () => {
    const productos = new mongoDBContainer("ecommerce", "usuarios");
        const mostrarID = await productos.getById(id);
        res.send(mostrarID);
    };
    mostrarProdID();
});

const productoSubido = storage.fields([
    {
        nombre: "title",
        price: "price",
        thumbnail: "thumbnail",
        description: "descripcion",
        codigo: null,
        stock: null
    },
]);

routerMongoDB.post("/mongodb", productoSubido, async (req, res, next) => {
    const subirProduct = async () => {
        const productos = new mongoDBContainer("ecommerce", "usuarios");
        if (
            req.body.title === "" ||
            req.body.price === "" ||
            req.body.thumbnail === "" ||
            req.body.description === "" ||
            req.body.codigo === "" ||
            req.body.stock === ""
        ) {
            return res.status(400).send({
                error: "No se pudo cargar el producto. Complete los campos vacios.",
            });
        } else {
            await productos.metodoSave(req.body);
            return res.send(req.body);
        }
        next();
    };
subirProduct();
});

// routerCarrito.delete("/carrito/:id", (req, res) => {
//     let id = parseInt(req.params.id);
//     const eliminoPorID = async () => {
//         const productos = new carritoContainer("carrito.txt");
//         const mostrarID = await productos.deleteById(id);
//         res.send(`elemento con el ${id} eliminado`);
//     };
//     eliminoPorID();
// })

module.exports = {routerMongoDB};
