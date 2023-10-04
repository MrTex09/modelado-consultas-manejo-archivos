import express from "express";

import mongoose from "mongoose";

import fileUpload from "express-fileupload";
import rutasLibros from "./routes/libros.js";
import rutasAutor from "./routes/autores.js";
const app = express();

const connectMongoDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/maquetacion");
    console.log("Conexion establecida correctamente");
  } catch (error) {
    console.log(`error al conectarse a la base de datos: ${error.message}`);
  }
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use("/libros", rutasLibros);
app.use("/autores", rutasAutor);

app.listen(3000, () => {
  console.log("Servidor en funcionamiento en el puerto 3000");
  connectMongoDb();
});
