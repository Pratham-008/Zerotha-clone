const { model }=require("mongoose");

const {holdingschema}=require('../schema/holdingschema');

const holdingmodel=new model("holding",holdingschema);

module.exports={holdingmodel};