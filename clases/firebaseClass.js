const admin = require("firebase-admin");
const serviceAccount = require("../db/coderback-74f26.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coderback-74f26.firebase.io",
});

const db = admin.firestore();


module.exports = class ContenedorFirebase {
  constructor( nombreCollection) {
    this.nombreCollection = nombreCollection;
  }

  async getAll() {
    const query = db.collection(this.nombreCollection);
    const resultados = (await query.get()).docs;
    console.log(resultados.map((resultado) => resultado.data()));
  }
};

// const resultados = (await query.get()).docs;
// console.log(resultados.map( resultado => (resultado.data())));
// }

/**
 *  1) Agregar Colores
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
