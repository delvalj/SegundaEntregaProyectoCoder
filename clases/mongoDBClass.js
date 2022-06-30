const {MongoClient} = require("mongodb");

const mongo = new MongoClient("mongodb+srv://delvalj:Joaquin712@cluster0.vznga.mongodb.net/?retryWrites=true&w=majority");
mongo.connect();

module.exports = class ContenedorMongoDB {
    constructor(nombreTabla, nombreCollection) {
      this.nombreTabla = nombreTabla;
      this.nombreCollection = nombreCollection;
    }

async metodoSave() {
    // await mongo.db("ecommerce").collection("usuarios").insertOne({nombre: 'Federico', apellido: 'Garcia Lorca', dni: 17282712});
    await mongo.db(this.nombreTabla).collection(this.nombreCollection).insertOne({nombre: 'Joaquin', apellido: 'del Val', dni: 17282712});
}

async getAll() {
    const resultado = (await mongo.db(this.nombreTabla).collection(this.nombreCollection).find().toArray());
    console.log(resultado)
  }
}

