const { model }=require("mongoose");

const {orderschema}=require('../schema/orderSchema');

const ordermodel=new model("orders",orderschema);

module.exports={ordermodel};