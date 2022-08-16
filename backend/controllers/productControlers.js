const productModel = require("../models/productModel");
//add product
const addproduct = async (req, res) => {
  // protocole :http
  // host : localhost
  const url = `${req.protocol}://${req.get("host")}`;
  console.log(req.file);
  const { file } = req;
  try {
    const newProduct = new productModel({ ...req.body});
    newProduct.image = `${url}/${file.path}`;
    await newProduct.save();
    res.send({ product: newProduct, message: "product succesffuly" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports={addproduct} 