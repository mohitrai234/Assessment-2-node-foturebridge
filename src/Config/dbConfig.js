const mongoose = require("mongoose")
require('dotenv').config()
const DB_Name = process.env.DB_Name
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL + "/" + DB_Name)
const db = mongoose.connection;
db.once("open", function () {
    console.log("Database Connected");
})