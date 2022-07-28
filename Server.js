const express=require('express');
var bodyParser=require('body-parser');

const app=express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }))

app.post("/",function(req,res){
    console.log(req.body);
})


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})



app.listen(3000,function(){
    console.log("Server started at port 3000");
})