const Book = require("../models/book");

const getAllBook = async (req, res) => {
    try {
        const getbooks = await Book.find({});
        if (getbooks.length > 0) {
            res.send(getbooks)
        }
        else {
            res.send({ message: 'No books found' });
        }

    } catch (error) {
        res.status(404).send({ message: error })
    }
}

const AddBook = async (req, res) => {
    try {
        const { title, name, author, price } = req.body;
        if (title && name && author && price) {
            const newbooks = await Book.create({
                title,
                name,
                price,
                author,
            })
            await newbooks.save();
            res.status(200).send({ message: "add book successfully", newbooks })
        }
        else {
            res.status(404).send({ message: "please enter required field" })

        }

    } catch (error) {
        res.status(404).send({ message: "server error" });
    }
}

const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const updateBookData = req.body;

        const updaterequest = await Book.findByIdAndUpdate(bookId, updateBookData, { new: true });

        if (updaterequest) {
            res.send({ message: "Update success", updaterequest });
        } else {
            res.send({ message: "Update failure" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Server error" });
    }
}




const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const deleteBookRequest = await Book.findByIdAndRemove(bookId);
        if (deleteBookRequest) {
            res.send({ message: "Book deleted successfully" })
        }
        else {
            res.send({ message: "Book not found" })
        }
    } catch (error) {
        res.status(404).send({ message: "server error" });
    }
}


module.exports = { getAllBook, AddBook, updateBook, deleteBook };
