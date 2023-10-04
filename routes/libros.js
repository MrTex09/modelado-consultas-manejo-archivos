import { Router } from "express";
import { libroModel } from "../models/libros.js";
const rutasLibros = Router();

// Ruta para crear un nuevo libro
rutasLibros.post("/crear", async (req, res) => {
  try {
    const nuevoLibro = new libro({
      titulo: req.body.titulo,
      genero: req.body.genero,
      anoPublicacion: req.body.anoPublicacion,
      autor: req.body.autor, // Debe ser el ID del autor
      portada: req.body.portada, // Ruta de la imagen de portada
    });

    const libroGuardado = await libroModel.save();

    res.json(libroGuardado);
  } catch (error) {
    res.status(400).json({ error: "No se pudo crear el libro" });
  }
});

// Ruta para obtener la lista de libros
rutasLibros.get("/listar", async (req, res) => {
  try {
    const libros = await libroModel.find().populate("autor"); // Popula el campo "autor" con los datos del autor
    res.json(libros);
  } catch (error) {
    res.status(400).json({ error: "No se pudo obtener la lista de libros" });
  }
});

// Ruta para obtener un libro por su ID
rutasLibros.get("/:id", async (req, res) => {
  try {
    const libro = await libroModel.findById(req.params.id).populate("autor"); // Popula el campo "autor" con los datos del autor
    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json(libro);
  } catch (error) {
    res.status(400).json({ error: "No se pudo obtener el libro" });
  }
});

// Ruta para eliminar un libro por su ID
rutasLibros.delete("/:id", async (req, res) => {
  try {
    const libro = await libroModel.findByIdAndDelete(req.params.id);
    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.json({ mensaje: "Libro eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: "No se pudo eliminar el libro" });
  }
});

export default rutasLibros;
