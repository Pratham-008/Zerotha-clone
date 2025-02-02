const {Schema}=require("mongoose");

const orderschema=new Schema({
    name: String,
    qty:Number,
    price: Number,
    mode: String,
    Date:Date
})

module.exports={orderschema}