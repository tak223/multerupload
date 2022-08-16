const express = require('express')
const app = express();
const port = 7000 || 5000;
const connectDB = require("./config/connectDB")
app.use("/uploads", express.static(__dirname + "/uploads"));
connectDB()

app.use(express.json())
app.use("/product",require("./routes/productRoutes"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))