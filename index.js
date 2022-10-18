const express = require('express')
const bodyParser =require('body-parser')
const Nexmo =require('nexmo')
const ejs = require('ejs')
const Port = 3000

const app = express()
//dosya olusruruken views yamasyi ubutnma hata veriyor
app.set('view engine','html')
app.engine('html',ejs.renderFile)

//routes
app.get('/',(req,res)=>{
    res.render('index')
})

//statik dosyalarin diyini belirtme



//dinleme
const server = app.listen(Port,()=>{
    console.log(`server${Port} dinleniiyor`)
})
