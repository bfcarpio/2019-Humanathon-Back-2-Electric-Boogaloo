const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let Location = new Schema({
  Label: { type: String, required: true },
  Description: { type: String, required: true },
  Phone: { type: String, required: true },
  Map: { type: String, required: true },
  X: { type: Number, required: true },
  Y: { type: Number, required: true }
});

let schemaCtrl = {
  Location: mongoose.model("Location", Location)
};

module.exports = schemaCtrl;
