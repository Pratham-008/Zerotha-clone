require("dotenv").config();
const express = require("express");
const { holdingmodel } = require("./model/holdingmodel")
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const { holdingschema } = require("./schema/holdingschema");
const { positionmodel } = require("./model/positionmodel")
const { watchlistmodel } = require("./model/watchlistmodel")
const { positionschema } = require("./schema/positionschema")
const { orderschema } = require("./schema/orderSchema")
const { ordermodel } = require("./model/ordermodel")

const { watchlistschema } = require("./schema/watchlistschema")
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;



const app = express();
app.use(cors());
app.use(bodyParser.json())

app.get("/allholdings", async (req, res) => {
    let allholdings = await holdingmodel.find();
    res.json(allholdings)
})


app.post("/newOrder", async (req, res) => {
    let neworder = new ordermodel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        Date: new Date(),
    })
    neworder.save();
    res.send("order saved");
})

app.get("/allpositions", async (req, res) => {
    let allpositions = await positionmodel.find();
    res.json(allpositions)
})


app.listen(PORT, () => {
    console.log("app is started!", PORT);
    mongoose.connect(uri);
    console.log("db is connected");
})

app.get("/allorders", async (req, res) => {
        let allorders = await ordermodel.find();
        res.json(allorders);
});
