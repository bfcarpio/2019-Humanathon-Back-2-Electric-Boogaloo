const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let Location = new Schema({
  label: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  map: { type: String, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true }
});

let schemaCtrl = {
  Location: mongoose.model("Location", Location)
};

module.exports = schemaCtrl;
