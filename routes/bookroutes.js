const express = require('express');
const BookData = require("../controller/book");

const router = express.Router();


router.get("/books",BookData.getAllBook);
router.post("/add-book",BookData.AddBook);


module.exports = router;