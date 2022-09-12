const express = require('express')
const mongoose = require('mongoose');
const cors = require("cors")
const Modules = require("./modules")

const port = 3000
const app = express()

app.use(cors())

app.use(Modules)

const server = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        app.listen(port, () => console.log(`Server running on port ${port}`))
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

module.exports = server