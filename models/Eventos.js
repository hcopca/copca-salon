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
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Salon",
    },
  },
  { timestamps: true }
);

module.exports = model("Eventos", eventosSchema);
