const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/order",{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection is successfully");
}).catch((e) => {
    console.log(e);
})
    
