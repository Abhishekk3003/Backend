require('dotenv').config
const express = require('express');


const app = express();



app.get('/',(req,res) => {
    res.send("hii server");
})

app.get('/twitter',(req,res) => {
    res.send("hii twitter");
})

app.get('/login',(req,res) => {
    res.send("<h1>Hii,please login</h1>");
})

// const PORT = 4000;

app.listen(process.env.PORT,() => {
    console.log(`Server is running in : ${process.env.PORT}`)
})