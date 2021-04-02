const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user : {
        type : String,
        require: true,
    }
})
const User = new mongoose.model('User', userSchema) 
module.exports = User