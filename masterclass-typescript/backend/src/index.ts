import express from 'express';//Importar o express

const app = express();//Colocar o express dentro de uma váriavel

app.get('/',(req,res)=>{
    return res.send("Hello Word")
})

app.listen(3333);

