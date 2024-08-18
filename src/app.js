import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express(); 

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
})) // setting up configurations for CORS

// limit the body size to 16kb
app.use(express.json({limit: "16kb"})) 

// limit the url size to 16kb
app.use(express.urlencoded({extended: true, limit: "16kb"})) 

// static files folder
app.use(express.static("public")) 

// setting up the configuration for cookies using cookie-parser
app.use(cookieParser()) 


// routes
import userRouter from './routes/user.routes.js'


// routes declaration
app.use("/api/v1/users", userRouter)




export { app }