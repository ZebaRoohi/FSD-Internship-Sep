
const express=require('express')
const app=express()
const path=require('path') //resolve file paths 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//it servers static files from public folder
app.use(express.static('public'))

//routes to handle json req
app.post('/api/data',(req,res)=>{
    const data=req.body //parsed the json data
    res.json({msg:'Received json data',data})
})

app.post('/api/form',(req,res)=>{
    const {name,email}=req.body
    res.json({msg:'Received form data',name,email})
})

app.listen(3000,()=>{
    console.log('server is running')
})