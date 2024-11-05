// require('dotenv').config({path : "./env"}) Not used as in starting always import statemnt is there , it disturbs the arrangement of file
import dotenv from "dotenv" // By experimental feature in package json in dev otherwise we have to use const dotenv = reuire(dotenv)
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
path : './env'
})

connectDB();
const app = express();


// dotenv helps in , whenever application loads all env variables are laoded first and available to all like database


// 1ST METHOD

// ( async () => {
//     try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error)=> {
//         console.log("ERROR : ", error);
//         throw error;
//     })

//     app.listen(process.env.PORT,()=>{
//         console.log(`APP IS LISTENING ON PORT : ${process.env.PORT}`);
//     })
//     } catch(error){
//     console.error("ERROR : ",error);
//     throw error
//     }
// })

// 2ND METHOD 

// function connectdb(){}
// connectdb