const express=require('express')
const app=express()
const cors=require('cors')

//middleware

app.use(cors())

app.listen(5000,()=>{
    console.log("server started listenig on port no 5000")
})