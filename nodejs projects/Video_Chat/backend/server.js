import express from "express";
import { chats } from "./data.js";
import dotenv from"dotenv";
const app=express();
dotenv.config();
app.get("/",(req,res,next)=>{
    res.send("Hellow World");
})
app.get("/api/chat",(req,res,next)=>{
    res.send(chats);
})
app.get("/api/chat/:id",(req,res,next)=>{
   const singleChat=chats.find((c)=>c._id === req.params.id);
   res.send(singleChat);
})
const PORT=process.env.PORT || 9000
app.listen(9000,console.log(`Server Started on port ${PORT} `))

