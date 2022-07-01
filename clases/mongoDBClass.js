const { MongoClient } = require("mongodb");

const mongo = new MongoClient(
  "mongodb+srv://delvalj:Joaquin712@cluster0.vznga.mongodb.net/?retryWrites=true&w=majority"
);
mongo.connect();

module.exports = class ContenedorMongoDB {
  constructor(nombreTabla, nombreCollection) {
    this.nombreTabla = nombreTabla;
    this.nombreCollection = nombreCollection;
  }

  async metodoSave(producto) {
    await mongo
      .db(this.nombreTabla)
      .collection(this.nombreCollection)
      .insertOne({
        nombre: producto.nombre,
        apellido: producto.apellido,
        dni: producto.dni,
      });
  }

  async getAll() {
    const resultado = await mongo
      .db(this.nombreTabla)
      .collection(this.nombreCollection)
      .find()
      .toArray();
    console.log(resultado);
  }

  // async getById(id) {
  //   try {
  //     const resultado = (await mongo.db(this.nombreTabla).collection(this.nombreCollection).find().toArray());
  //     return resultado.find((p) => p.id === id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
};
