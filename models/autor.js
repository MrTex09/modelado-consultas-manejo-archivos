import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  Nombre: String,
  Apellido: String,
  Bibliografia: String,
});

export const autorModel = mongoose.model("autor", autorSchema);
