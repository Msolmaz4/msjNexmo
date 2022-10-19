const express = require('express')
const bodyParser =require('body-parser')
const Nexmo =require('@vonage/server-sdk')
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
//bodyparser json formatinda gelen disyayi duyenlemeye yariyor
app.use(bodyParser.json())
//sifrelenmis body parserlda bu komut kullaniriy
app.use(bodyParser.urlencoded({extended:true}))




//statik dosyalarin diyini belirtme

app.use(express.static(__dirname + '/statik'))

//nexmo objwesi yapma

const nexmo = new Nexmo({
    apiKey: "badfa19e",
    apiSecret: "USyGBUmV0yc4Gbs5"
  },{debug:true})



  //main.js den gelene yaklaamal
app.post('/',(req,res)=>{
    const number =req.body.number
    const text =req.body.text

    nexmo.message.sendSms("Vonage APIs",number,text)
})

//dinleme
const server = app.listen(Port,()=>{
    console.log(`server${Port} dinleniiyor`)
})
