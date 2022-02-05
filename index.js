const express = require("express")
const fs = require("fs")
const multer = require("multer")
const csv = require("fast-csv")
const app = express()
const port = 3000
const upload = multer({dest:'tmp/csv/'})
const {echoHelper,invertHelper,flateenHelper,sumHelper,multiplyHelper} = require('./helper')

app.get("/echo",upload.single('file'),(req, res)=>{
    console.log(req.file)
    res.send("Hello World")
})
app.get("/invert",upload.single('file'),(req, res)=>{
    res.send("Hello World")
})
app.get("/flatten",upload.single('file'),(req, res)=>{
    res.send("Hello World")
})
app.get("/sum",upload.single('file'),(req, res)=>{
    res.send("Hello World")
})
app.get("/multiply",upload.single('file'),(req, res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log("Server launched")
})