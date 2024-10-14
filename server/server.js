//all necessary dependencies included
//mongoose simplifies the whole connecting to database part
//express simplifies the process of creating the backend (it does a lot)
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const trailRoute = require('./routes/trails')


const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//use the path api/trails if testing in Postman
app.use('/api/trails',trailRoute)

//db connection
//should log "connected to db and listening on port"
//if database connection is established
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () =>{
            console.log('connected to db and listening on port')
        })
    })
    .catch((error) => {
        console.log(error)
    })

process.env