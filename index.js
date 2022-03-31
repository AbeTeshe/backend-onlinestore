const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("Database Connected Successfully!"))
        .catch((err) => {
            console.log(err.message);
    });

    app.use(express.json());

    app.listen(process.env.PORT || 5000, () => {
        console.log(`Backend server os running on port: ${process.env.PORT}`)
    })
