const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user : {
        type : String,
        require: true,
    },
    product : {
        type : String,
        require: true,
    },
    price : {
        type : Number,
        require: true,
    },
    quantity : {
        type : Number,
        require: true,
    },
    date : {
        type : Date,
        default: (new Date()).getTime()
    }
})
const userSchema = new mongoose.Schema({
    user : {
        type : String,
        require: true,
    },
})
const Order = new mongoose.model('Order', orderSchema)  

module.exports = Order