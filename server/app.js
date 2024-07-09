const express=require('express')
const app=express();
const userModel=require("./Models/userModel")
const cookieParser=require('cookie-parser');
const path=require('path');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.send("done")
})

   app.listen(3000)
  