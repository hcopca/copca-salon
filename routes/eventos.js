const express = require("express");
const { findByIdAndUpdate } = require("../models/Eventos");
const router = express.Router();
const Eventos = require("../models/Eventos");

//Ruta para crear eventos.
router.post("/crear", (req, res, next) => {
  const { nombre } = req.body;

  Eventos.create({
    nombre,
    tipo,
  })
    .then((eventoCreado) => {
      req.status(200).json({ eventoCreado });
    })
    .catch.err((err) => res.status(500).json({ err }));
});

//Ruta para editar eventos.

router.patch("/eventos/edit/:id", (req, res, next) => {
  const { id } = req.params;
  const { nombre, tipo } = req.body;

  Eventos.findByIdAndUpdate(id, { nombre, tipo }, { new: true })
    .then((extraCreado) => {
      res.status(200).json({ extraCreado });
    })
    .catch((err) => res.status(500).json({ err }));
});

//Ruta para borrar eventos

router.delete("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  Eventos.findByIdAndDelete(id)
    .then((extra) => {
      res.status(200).json({ extra });
    })
    .catch((err) => res.status(500).json({ err }));
});

//Ruta para mostrar eventos

router.get("/all", (req, res, next) => {
  Eventos.find()
    .then((eventos) => {
      res.status(200).json({ eventos });
    })
    .catch((err) => res.status(500).json({ err }));
});

module.exports = router;
