const express= require('express');
const connectDB = require('./config/connection');
const Book = require("./models/book")
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
const app = express();
const port = process.env.PORT || 3000;
connectDB(MONGO_URL);

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})