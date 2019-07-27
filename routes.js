const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const apiCtrl = require("./api/apiCtrl");

router.get("/locations", apiCtrl.getLocations);
router.get("/locations/:id", apiCtrl.getLocation);
router.post("/locations", apiCtrl.addLocation);
router.delete("/locations/:id", apiCtrl.deleteLocation);

module.exports = router;
