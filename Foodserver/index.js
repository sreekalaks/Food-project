
//import express

const express = require('express');

//import cors

const cors = require('cors')

//import dataservices
const dataservices = require('./services/dataservice');

//create an  application using express

const app = express();

//use json parser for server responses

app.use(express.json())

// using cors specify the origin to the server

app.use(cors({
    origin:'http://localhost:4200'
}))

//set up a portnumber

app.listen(3000,()=>{
    console.log('listening on the port:3000');
})

//Api calls to get allfoods

app.get('/all-foods',(req,res)=>{
  dataservices.getFoods().then(
    result=>{
        res.status(result.statusCode).json(result)
    }
  )
})

//Api calls to addto wishlist

app.post('/addtowishlist',(req,res)=>{
   
  dataservices.addtowishlist(req.body.id,req.body.name,req.body.price,req.body.category,req.body.image).then(
    result=>{
      res.status(result.statusCode).json(result)

    }
  )
}

)


//Api calls to get all wishlist foods

app.get('/getwishlist',(req,res)=>{
  dataservices.getwishlist().then(
    result=>{
        res.status(result.statusCode).json(result)
    }
  )
})


//Api calls to delete wishlist foods

app.delete('/deletewish/:id',(req,res)=>{
  dataservices.deletewish(req.params.id).then(
    result=>{
        res.status(result.statusCode).json(result)
    }
  )
})
