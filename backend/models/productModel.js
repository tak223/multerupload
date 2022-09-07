const mongoose = require ('mongoose') ;
const { Schema } = mongoose;

const productSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  price: Number,
  description: String, 
  Type: String,
  isav:{ type: Boolean, default:true }, 
  date: { type: Date, default: Date.now },
  image : String,
});
const productModel = mongoose.model("products", productSchema)
module.exports=productModel