const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Product : {
        type : String,
        require: true,
    }
})
const Product = new mongoose.model('Product', userSchema) 
module.exports = Product