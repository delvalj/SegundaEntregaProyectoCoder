const { MongoClient } = require("mongodb");
var ObjectId = require("mongodb").ObjectId;

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
    return resultado;
  }

  async getById(id) {
    try {
      const resultado = await mongo
        .db(this.nombreTabla)
        .collection(this.nombreCollection)
        .find({ _id: ObjectId(id) })
        .toArray();
      console.log(resultado);
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }

  async updateById(id, producto) {
    try {
      const resultado = await mongo
        .db(this.nombreTabla)
        .collection(this.nombreCollection)
        .updateOne(
          { "_id" : ObjectId(id) },
          {
            "$set" : { 
              "nombre": producto.nombre,
              "apellido": producto.apellido,
              "dni": producto.dni,
            },
          }
        );
      // console.log(resultado);
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(id) {
    try {
      const resultado = await mongo
        .db(this.nombreTabla)
        .collection(this.nombreCollection)
        .deleteOne({ _id: ObjectId(id) });
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }
};
