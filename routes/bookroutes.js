const express = require('express');
const BookData = require("../controller/book");

const router = express.Router();


router.get("/books",BookData.getAllBook);
router.post("/add-book",BookData.AddBook);
router.put("/book/:id",BookData.updateBook);
router.delete("/book/:id",BookData.deleteBook);


module.exports = router;