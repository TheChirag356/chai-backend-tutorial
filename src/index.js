// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config({
    path: './env'
})

import connectDB from "./db/index.js"


connectDB()












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