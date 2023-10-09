import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
  titulo: String,
  genero: String,
  añoPublicacion: Number,
  portada: String, // Ruta de la imagen de portada
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autor", // Referencia al modelo Autor
  },
});
export const libroModel = mongoose.model("Libro", libroSchema);
