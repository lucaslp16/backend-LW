import express from  'express';

const app  = express();
app.use(express.json())


app.get('/',(req,res)=>{
    res.json({message:' Bem vindo'})
})



app.listen(3333);