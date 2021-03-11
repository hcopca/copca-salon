const { Schema, model } = require("mongoose");

const eventosSchema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
    },
    tipo: {
      type: String,
    },
    imagen: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("Eventos", eventosSchema);
