//External import
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
dotenv.config();
const app=express()
app.use(cors(
    {
        // origin: process.env.FRONTEND_URL,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    }
));

app.use(express.urlencoded({ extended: true })); 

app.use(express.json()); 
app.use(cookieParser());
app.use(morgan('dev'));

app.use(helmet(
    {
        crossOriginEmbedderPolicy: false,
    }
));
const port=process.env.PORT

//Routes
app.get('/', (req, res) =>{
    res.json({
        message: 'Welcome to the Express Server '+port
    })
})

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});