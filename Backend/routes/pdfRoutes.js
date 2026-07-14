const express = require("express");
const router = express.Router();

const { getPdfs } = require("../controllers/pdfController");

router.get("/", getPdfs);

module.exports = router;