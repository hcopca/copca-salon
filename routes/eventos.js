const express = require("express");
const { findByIdAndUpdate } = require("../models/Eventos");
const router = express.Router();
const Eventos = require("../models/Eventos");

//Ruta para crear eventos.
router.post("/crear", (req, res, next) => {
  const { nombre, tipo, userId } = req.body;

  Eventos.create({
    nombre,
    tipo,
    userId,
  })
    .then((eventoCreado) => {
      res.status(200).json({ eventoCreado });
    })
    .catch((err) => res.status(500).json({ err }));
});

//Ruta para editar eventos.

router.patch("/edit/:id", (req, res, next) => {
  const { id } = req.params;

  Eventos.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((eventoCreado) => {
      res.status(200).json({ eventoCreado });
    })
    .catch((err) => res.status(500).json({ err }));
});

router.get("/detail/:id", (req, res, next) => {
  const { id } = req.params;
  Eventos.findById(id)
    .then((evento) => {
      res.status(200).json({ evento });
    })
    .catch((err) => res.status(500).json({ err }));
});

//Ruta para borrar eventos

router.delete("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  Eventos.findByIdAndDelete(id)
    .then((eventos) => {
      res.status(200).json({ eventos });
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

router.get("/user/:id", (req, res, next) => {
  const { id } = req.params;
  Eventos.find({ userId: id })
    .then((eventos) => {
      res.status(200).json({ eventos });
    })
    .catch((err) => res.status(500).json({ err }));
});

module.exports = router;
