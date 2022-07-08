import ContenedorMongoDB from "../../clases/mongoDBClass";

class ProductosDaoMongo extends ContenedorMongoDB {
    constructor(nombreTabla, nombreCollection) {
        super(nombreTabla, nombreCollection);
    }
}

export default ProductosDaoMongo;   