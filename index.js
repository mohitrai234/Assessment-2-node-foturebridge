// Init Lib
const express = require('express');
const cors = require('cors');
const { userRoute } = require('./src/Navigation/userRoute');
const dbConfig = require('./src/Config/dbConfig')
const app = express()
// some common settings
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Assign Route
app.get('/', (req, res) => {
    res.send("Server is running.")
})
app.use('/users', userRoute())

//  Assign Port
app.listen(8090)