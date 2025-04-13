import express from 'express';

const app=express();

app.get('/home',(req,res)=>{
    res.send("hello world");
})

const port=process.env.port||3000;

app.listen(port ,()=>{
    console.log(`listening on port ${port}`);
})
