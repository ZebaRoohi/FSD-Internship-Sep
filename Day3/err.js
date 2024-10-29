const express=require('express')
const app=express()

//error handling
const errorHandling=(err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Something went wrong here...........')
}
app.use((req,res,next)=>{
    throw new Error('Something broke')
})
app.use(errorHandling)
app.listen(4000,()=>{
    console.log('server is running')
})