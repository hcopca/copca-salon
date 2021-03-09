const { Schema, model } = require("mongoose");

const extrasSchema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
    },
    cantidad: {
      type: Number,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Salon",
    },
  },
  { timestamps: true }
);

module.exports = model("Extras", extrasSchema);
