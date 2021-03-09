const express = require("express");
const router = express.Router();
const Salon = require("../models/Salon");

//Ruta para crear salones
router.post("/crear", (req, res, next) => {
  const {
    nombre,
    capacidadMin,
    capacidadMax,
    imagen,
    detalles,
    userId,
  } = req.body;

  Salon.create({
    nombre,
    capacidadMin,
    capacidadMax,
    imagen,
    detalles,
    userId,
  })
    .then((salonCreado) => {
      res.status(200).json({ salonCreado });
    })
    .catch((err) => res.status(500).json({ err }));
});

//Ruta para editar salones

router.patch("/salones/edit/:id", (req, res, next) => {
  const { id } = req.params;
  const { nombre, capacidadMin, capacidadMax, imagen, detalles } = req.body;
  Salon.findByIdAndUpdate(
    id,
    { nombre, capacidadMin, capacidadMax, imagen, detalles },
    { new: true }
  )
    .then((salonCreado) => {
      res.status(200).json({ salonCreado });
    })
    .catch((err) => res.status(500).json({ err }));
});

//Ruta para borrar salón

router.delete("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  Salon.findByIdAndDelete(id)
    .then((salon) => {
      res.status(200).json({ salon });
    })
    .catch((err) => res.status(500).json({ err }));
});

//Ruta para mostrar todos los salones

router.get("/all", (req, res, next) => {
  Salon.find()
    .then((salones) => {
      res.status(200).json({ salones });
    })
    .catch((err) => res.status(500).json({ err }));
});

module.exports = router;
