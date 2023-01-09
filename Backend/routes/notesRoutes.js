const express = require("express");
const getNotes = require("../controllers/notesController.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.route("/").get(auth, getNotes);

module.exports = router;
