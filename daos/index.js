// const {ProductosDaoMongo} = require('./productos/productosDaoMongo');

// let containerToExportProduct = "";
// // let containerToExportcart = "";

// const DATA_BASE_PRODUCTS = "fs"
// // const DATA_BASE_CARTS = "fs"

// switch(DATA_BASE_PRODUCTS){
//   case "fs": containerToExportProduct = DaoFileProducts;
//   break;
//   case "memory": containerToExportProduct = DaoMemoryProducts;
//   break;
//   case "mongoDb": containerToExportProduct = ProductosDaoMongo;
//   break;
//   case "firebase": containerToExportProduct = DaoFirebaseProducts;
//   break;
// }

// // switch(DATA_BASE_CARTS){
// //     case "fs": containerToExportcart = DaoFileCarts;
// //     break;
// //     case "memory": containerToExportcart = DaoMemoryCarts;
// //     break;
// //     case "mongoDb": containerToExportcart = DaoMongoDbCarts;
// //     break;
// //     case "firebase": containerToExportcart = DaoFirebaseCarts;
// //     break;
// //   }
  
//   const ContainerProduct = await import(containerToExportProduct);
// //   const ContainerCart = await import(containerToExportcart);
  
//   export const DaoProduct = ContainerProduct;
// //   export const DaoCart = ContainerCart;