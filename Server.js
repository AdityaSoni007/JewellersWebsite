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

let port= process.env.PORT;
if(port==null || port==""){
    port=3000;
}

app.listen(port,function(){
    console.log("Server started successfully");
})