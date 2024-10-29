const express=require('express')
const app=express()

//first mw
app.use('/',(req,res,next)=>{
    console.log('Hello this is first res')
    next()
})
//second mw
app.use('/',(req,res,next)=>{
    console.log('second middleware')
    next()
})
app.use('/',(req,res,next)=>{
    console.log('Third mw')
    res.send('get request in browser')
})


app.listen(3000,()=>{
    console.log('server is running')
})