//console.log('Hallo dunia');
//1- mendefinisikan module, middleware
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//2- listen port dan buat callback dengan output console.log
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

//3- koneksi ke database mongodb
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
//handle error
db.on("error", console.error.bind(console, "Error Establishing a Database Connection??"));
//handle succes
db.once("open", () => {
  console.log("Database is Connected");
});

//6- middleware body-parser
//
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//7-import routes
const mahasiswaRoutes = require(".routes/mahasiswa");
const { MongoAPIError } = require("mongodb");

//8- app.use (mendaftarin middleware baru ke express)
app.use("/mahasiswa", mahasiswaRoutes);
