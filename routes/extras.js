const express = require("express");
const { findByIdAndUpdate } = require("../models/Extras");
const router = express.Router();
const Extra = require("../models/Extras");

//Ruta para crear extras.
router.post("/crear", (req, res, next) => {
  const { nombre, cantidad, userId } = req.body;

  Extra.create({
    nombre,
    cantidad,
    userId,
  })
    .then((extraCreado) => {
      res.status(200).json({ extraCreado });
    })
    .catch((err) => res.status(500).json({ err }));
});

//Ruta para editar extras.

router.patch("/edit/:id", (req, res, next) => {
  const { id } = req.params;

  Extra.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((extra) => {
      res.status(200).json({ extra });
    })
    .catch((err) => res.status(500).json({ err }));
});

//Ruta para borrar extra

router.delete("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  Extra.findByIdAndDelete(id)
    .then((extra) => {
      res.status(200).json({ extra });
    })
    .catch((err) => res.status(500).json({ err }));
});

//Ruta para mostrar extras

router.get("/all", (req, res, next) => {
  Extra.find()
    .then((extras) => {
      res.status(200).json({ extras });
    })
    .catch((err) => res.status(500).json({ err }));
});
router.get("/detail/:id", (req, res, next) => {
  const { id } = req.params;
  Extra.findById(id)
    .then((extra) => {
      res.status(200).json({ extra });
    })
    .catch((err) => res.status(500).json({ err }));
});

router.get("/user/:id", (req, res, next) => {
  const { id } = req.params;
  Extra.find({ userId: id })
    .then((extras) => {
      res.status(200).json({ extras });
    })
    .catch((err) => res.status(500).json({ err }));
});

module.exports = router;
