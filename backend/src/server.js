import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './modules/auth/auth.routes.js';
import { connectDB } from './config/db.js';

const app = express();
dotenv.config();

connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res)=>{
    res.json({
        message: "Hello E-Commerce backend"
    })
})

app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log("Error while listening the server.")
    }else{
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    }
});