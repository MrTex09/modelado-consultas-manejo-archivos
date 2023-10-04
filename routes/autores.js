import { Router } from "express";
import { autorModel } from "../models/autor.js";
const rutasAutor = Router();
// Ruta para crear un nuevo autor
rutasAutor.post("/crear", async (req, res) => {
  try {
    const nuevoAutor = new Autor({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      biografia: req.body.biografia,
    });

    const autorGuardado = await autorModel.save();

    res.json(autorGuardado);
  } catch (error) {
    res.status(400).json({ error: "No se pudo crear el autor" });
  }
});

// Ruta para obtener la lista de autores
rutasAutor.get("/listar", async (req, res) => {
  try {
    const autores = await autorModel.find();
    res.json(autores);
  } catch (error) {
    res.status(400).json({ error: "No se pudo obtener la lista de autores" });
  }
});

// Ruta para obtener un autor por su ID
rutasAutor.get("/:id", async (req, res) => {
  try {
    const autor = await autorModel.findById(req.params.id);
    if (!autor) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }
    res.json(autor);
  } catch (error) {
    res.status(400).json({ error: "No se pudo obtener el autor" });
  }
});

// Ruta para actualizar un autor por su ID
rutasAutor.put("/:id", async (req, res) => {
  try {
    const autor = await autorModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!autor) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }
    res.json(autor);
  } catch (error) {
    res.status(400).json({ error: "No se pudo actualizar el autor" });
  }
});

// Ruta para eliminar un autor por su ID
rutasAutor.delete("/:id", async (req, res) => {
  try {
    const autor = await autorModel.findByIdAndDelete(req.params.id);
    if (!autor) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }
    res.json({ mensaje: "Autor eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: "No se pudo eliminar el autor" });
  }
});

export default rutasAutor;
