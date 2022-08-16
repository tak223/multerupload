const mongoose = require ('mongoose') ;
const { Schema } = mongoose;

const productSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  prise: Number,
  description:   String,
  date: { type: Date, default: Date.now },
});
const productModel = mongoose.model("products", productSchema)
module.exports=productModel