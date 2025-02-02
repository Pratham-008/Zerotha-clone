const {model}=require("mongoose")

const {watchlistschema}=require("../schema/watchlistschema")

const watchlistmodel=new model("watchlist",watchlistschema)

module.exports={watchlistmodel}