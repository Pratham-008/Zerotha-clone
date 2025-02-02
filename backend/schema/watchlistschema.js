const {Schema}=require("mongoose");

const watchlistschema=new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})

module.exports={watchlistschema}