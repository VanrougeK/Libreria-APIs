const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/authMiddleware");
const { getPdfs } = require("../controllers/pdfController");

router.get("/", authMiddleware, getPdfs);

module.exports = router;