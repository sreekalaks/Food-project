//import db

const { default: mongoose } = require('mongoose');
const db = require('./db');

//get all food details from db

const getFoods=()=>{
  return  db.Food.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    foods:result
                }
                
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message: 'food not found'
                }
            }
        }
    )
}

//add to wishlist details store to db

const addtowishlist =( id,name,price,category,image)=>{
   return db.Wishlist.findOne({id}).then(
    (result)=>{
        if(result){
            return{
                status:false,
                statusCode:401,
                 message:'food is already added to wishlist'
            }
        }
        else{

            const newFood= new db.Wishlist({
                id,name,price,category,image
            })
            newFood.save()
            return{
                status:true,
                statusCode:200,
                message:'food added successfully'
            }
        }
    }
   )
   


}


//get wishlist foods  details from db

const getwishlist=()=>{
    return  db.Wishlist.find().then(
          (result)=>{
              if(result){
                  return{
                      status:true,
                      statusCode:200,
                      foods:result
                  }
                  
              }
              else{
                  return{
                      status:false,
                      statusCode:402,
                      message: 'food is not found'
                  }
              }
          }
      )
  }
  //delete the wishlist product from db

  const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    foods:result,
                    message:"food removed successfully"
                }
                
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message: 'food is not found'
                }
            }
        }
    )
  }



module.exports={
    getFoods,
    addtowishlist,
    getwishlist,
    deletewish
}