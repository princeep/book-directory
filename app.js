const express= require('express');
const connectDB = require('./config/connection');
const Book = require("./models/book");
const router = require('./routes/bookroutes');
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;
connectDB(MONGO_URL);
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/",router);

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})