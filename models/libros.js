import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
  titulo: String,
  genero: String,
  anoPublicacion: Number,
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "Autor" },
  portada: String, // Almacena la ruta de la imagen de portada
});
export const libroModel = mongoose.model("Libro", libroSchema);
