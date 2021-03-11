const { Schema, model } = require("mongoose");

const salonesSchema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
    },
    capacidadMin: {
      type: Number,
      trim: true,
    },
    capacidadMax: {
      type: Number,
      trim: true,
    },

    imagen: {
      type: String,
    },
    detalles: {
      type: String,
    },
    precio: { type: Number },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("Salon", salonesSchema);
