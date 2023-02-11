//import mongoose

const mongoose = require('mongoose')

//define the connection string

mongoose.connect('mongodb://localhost:27017/Food',()=>{
    console.log('connected to mongodb');
})

//create a model for the foods

const Food=mongoose.model('Food',{
    //schema creation
    id:Number,
    name:String,
    price:Number,
    image:String,
    origin:String,
    category:String
})


 //create a new collection in mongodb - create a model
 const Wishlist=mongoose.model('wishlist',{
    id:Number,
    name:String,
    price:Number,
    category:String,
    image:String


})



module.exports={
    Food,
    Wishlist
}