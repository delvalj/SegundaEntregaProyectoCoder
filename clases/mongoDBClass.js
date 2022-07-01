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

  
/**
 * Metodo para guardar un usuario.
 * Recibo un objeto usuario como param. 
 * @param {Object} usuario 
 */
  async metodoSave(usuario) {
    await mongo
      .db(this.nombreTabla)
      .collection(this.nombreCollection)
      .insertOne({
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        dni: usuario.dni,
      });
  }

  /**
   * Metodo para obtener todos los usuarios
   * @returns 
   */
  async getAll() {
    const resultado = await mongo
      .db(this.nombreTabla)
      .collection(this.nombreCollection)
      .find()
      .toArray();
    console.log(resultado);
    return resultado;
  }

  /**
   * Metodo para obtener un usuario segun su ID 
   * @param {Integer} id recibo por parametro el id del usuario que voy a eliminar
   * @returns 
   */
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

  /**
   * Metodo para actualizar un usuario.
   * @param {Integer} id recibo por parametros el id del usuario que voy a actualizar .
   * @param {Object} usuario  recibo por parametros un objeto usuario con la nueva informacion.
   * @returns 
   */
  async updateById(id, usuario) {
    try {
      const resultado = await mongo
        .db(this.nombreTabla)
        .collection(this.nombreCollection)
        .updateOne(
          { "_id" : ObjectId(id) },
          {
            "$set" : { 
              "nombre": usuario.nombre,
              "apellido": usuario.apellido,
              "dni": usuario.dni,
            },
          }
        );
      return resultado;
    } catch (error) {
      console.log(error);
    }
  }

/**
 * Metodo para eliminar un usuario segun su ID.
 * @param {Integer} id obtengo el id del usuario que quiero eliminar.
 * @returns 
 */
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
