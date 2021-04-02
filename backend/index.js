const express = require("express")
var bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const path = require('path');

require("./db/connect")
const Order = require("./models/order")
const User = require("./models/user")
const Product = require("./models/product")
const PORT = process.env.PORT || 8080

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X_SIGN_TOKEN");
    next();
});

app.get("/order-get",  async (req, res) => {
    try{
        const CollegeData = await Order.find()
        console.log(CollegeData);
        res.json(CollegeData)
        
    }catch(e){
        res.send(e)
    }  
})

app.post("/order", urlencodedParser, async (req, res) => {
    try{
        const user = new Order(req.body)
        console.log((req.body.user));
        const createuser = await user.save()
        res.status(201).json(createuser)
    }catch(e){
        res.status(400).send(e)
    }
})
app.get("/order/:id", async (req, res) => {
    try{
        const _id = req.params.id
        console.log(_id);
        const findId = await Order.findById(_id)
        console.log(findId);

        if(!findId){
            return res.status(404).json()
        }else{
            res.json(findId)
        }
    }catch(e){
        res.send(e)
    }
})
app.patch("/update/:id", async (req, res) => {
    try{
        const id = req.params.id
        var obj = {
            name : req.body.email
        }
        const update = await Order.findByIdAndUpdate(_id, req.body)
        res.status(200).json(update)
    }catch(e){
        res.status(404).send(e)
    }   
})

if(process.env.NODE_ENV == 'production'){
    // set static folder
      app.use(express.static('frontend/build'));
      app.get('*', (req,res) => {
          res.sendFile(path.resolve("../", 'frontend', 'build', 'index.html'));
      })
  }

app.listen(PORT, () => {
    console.log(`listening ${PORT}`);
})