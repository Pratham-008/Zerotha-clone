const { model }=require("mongoose");

const {positionschema}=require('../schema/positionschema');

const positionmodel=new model("position",positionschema);

module.exports={positionmodel};