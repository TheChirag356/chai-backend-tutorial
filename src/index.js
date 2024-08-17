// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config({
    path: './env'
})

import connectDB from "./db/index.js"
import { app } from "./app.js"


connectDB()
.then( () => {
    app.on("error", (error) => {
        console.log(`Express App ERROR: ${error}`);
        throw error;
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT || 8000}`);
    } )
} )
.catch((err) => {
    console.log("Mongo DB connection failed !!", err);
    throw err;
})












/* Approach by adding all the things inside index.js file

import mongoose from 'mongoose';
import express from 'express'
const app = express()

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
            
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("Error", error);
        throw error;
    }
} )()
    */