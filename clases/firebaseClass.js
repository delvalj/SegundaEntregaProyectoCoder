const admin = require("firebase-admin");
const serviceAccount = require("../db/coderback-74f26.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coderback-74f26.firebase.io",
});

const db = admin.firestore();

module.exports = class ContenedorFirebase {
  constructor(nombreCollection) {
    this.nombreCollection = nombreCollection;
  }

  /**
   * Metodo para obtener todos los usuarios
   * @returns todos los usuarios
   */

  async getAll() {
    const query = db.collection(this.nombreCollection);
    const resultados = (await query.get()).docs;
    if (!resultados) {
      console.log("No users");
      return ('No users :(');
    } else {
      const result = resultados.map((resultado) => resultado.data());
      return result;
    }
  }

  /**
   * Metodo para guardar un usuario en BD.
   * @param {*} user
   * @returns
   */
  async metodoSave(user) {
    const query = db.collection(this.nombreCollection);
    const usuario = query.doc(user.nombre + user.apellido);
    // usuario.id = usuario.length + 1;
    const mostrarXPantalla = await usuario.create({
      nombre: user.nombre,
      apellido: user.apellido,
      dni: user.dni,
    });
    return mostrarXPantalla;
  }

  /**
   * Metodo para obtener un Usuario segun su ID, que a su vez, es obtenido por params.
   */

  async getById(doc) {
    const userRef = db.collection(this.nombreCollection).doc(doc);
    const user = await userRef.get();
    if (!user.exists) {
      console.log("No such document!");
    } else {
      const ususarioID = user.data();
      console.log(ususarioID);
      return ususarioID;
    }
  }

  /**
   * Metodo Para elimiar un usuario segun su nombre de usuario que asu vez es obtenido por params
   * @param {*} doc
   * @returns
   */
  async deleteById(doc) {
    if (!doc) {
      console.log("No such User!");
    } else {
      await db.collection(this.nombreCollection).doc(doc).delete();
      return "Usuario Eliminado";
    }
  }

  async updateById(doc, usuario) {

    const data = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      dni: usuario.dni
    };
    
    // Add a new document in collection "Usuarios" with nombre de Usuario '
    const res = await db.collection(this.nombreCollection).doc(doc).set(data);
    return res.data;
  }
};

/**
 * Crear un Usuario
 */

// const rojo = query.doc('red');
// await rojo.create({nombre: "red"});
//
// const green = query.doc('green');
// await green.create({nombre: "green"});
//
// const navy = query.doc('navy');
// await navy.create({nombre: "navy"});

// console.log('Documentos Creados!');

/**
 * 2) Listar todos los elementos
 */

//  async getAll() {
//     const resultado = (await mongo.db(this.nombreTabla).collection(this.nombreCollection).find().toArray());
//     console.log(resultado)
//   }

// const resultados = (await query.get()).docs;
// console.log(resultados.map((resultado) => resultado.data()));

/**
 * 3) Modificar un elemento de nombre 'Navy' por 'Blue'
 */
// const doc = query.doc('navy');
// await doc.update({nombre: "blue"})
//
// console.log('Nombre Modificado!')

/**
 *  4) Borrar el color 'Green'
 */
// const doc = query.doc('green');
// await doc.delete();
//
// console.log('Color Borrado');
