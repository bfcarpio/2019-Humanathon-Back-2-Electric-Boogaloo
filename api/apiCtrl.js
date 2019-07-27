const mongoose = require("mongoose");
const schema = require("../models/schema");
const url =
  "mongodb+srv://app:humana@cluster0-5ybnu.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connection Established");
});

const apiCtrl = {
  //Get all info
  async getLocations(req, res) {
    let locationMap = [];
    try {
      let locations = await schema.Location.find({});
      let i = 0;
      locations.forEach(function(location) {
        locationMap[i++] = location;
      });
      res.status(200).send(locationMap);
    } catch {
      return res.status(500).send({ Error: err });
    }
  },
  //Get marker
  async getLocation(req, res) {
    try {
      let location = await schema.Location.findById(req.params.id);
      res.status(200).send(location);
    } catch {
      return res.status(500).send({ Error: err });
    }
  },
  //Add marker
  async addLocation(req, res) {
    try {
      let result = await schema.Location.create({
        label: req.body.label,
        description: req.body.description,
        phone: req.body.phone,
        map: req.body.map,
        x: req.body.x,
        y: req.body.y
      });
      res.status(200).send(result);
    } catch (err) {
      return res.status(500).send({ Error: err });
    }
  },
  //Delete marker
  async deleteLocation(req, res) {
    try {
      let location = await schema.Location.findById(req.params.id).deleteOne();
      res.status(200).send(location);
    } catch {
      return res.status(500).send({ Error: err });
    }
  }
};

module.exports = apiCtrl;
