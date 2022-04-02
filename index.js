const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');

const authRoutes = require("./routes/auth");
const userProfileRoutes = require("./routes/userProfile");
const productRoutes = require("./routes/product");
const stripeRoutes = require("./routes/stripe");

dotenv.config();

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://Abe_user:abe%40123@test-cluster.r34xa.mongodb.net/onlinestore?retryWrites=true&w=majority')
        .then(() => console.log("Database Connected Successfully!"))
        .catch((err) => {
            console.log(err.message);
    });

app.use(express.json());
 app.use("/api/auth", authRoutes)
app.use("/api/userProfiles", userProfileRoutes);
app.use("/api/products", productRoutes);
app.use("/api/checkout", stripeRoutes);



app.listen( 5000, () => {
    console.log(`Backend server os running on port: 5000`)
})
