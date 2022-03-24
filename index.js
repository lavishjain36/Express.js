//Lets use the module called as express 
const express=require('express');
//create an object of the express module
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());
//create a port number
const PORT=process.env.PORT||4000;

app.route('/users').get((req,res)=>{
    res.send('Users are listed here');
});
//create a callback function with route
app.get("/",function(req,res){
    res.send({
        status:200,
        message:"Welcome to the Express.js"
    })
})


app.route('/movies').get((req,res)=>{
    res.send('Movies are listed here');
});


app.route('/students').get((req,res)=>{
    res.send('Students are listed here');
})


app.post('/',(req,res)=>{
    console.log(req.body);
    res.send({
        status:200,
        message:"Data Saved Successfully"
    })
})
//Make your server Listern on port number 
app.listen(PORT,()=>console.log("server is running on port"+PORT));

