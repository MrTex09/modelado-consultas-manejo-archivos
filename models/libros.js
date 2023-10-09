import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
  titulo: String,
  genero: String,
  añoPublicacion: String,
  portada: String,
});
export const libroModel = mongoose.model("Libro", libroSchema);
