//all necessary dependencies included
//mongoose simplifies the whole connecting to database part
//express simplifies the process of creating the backend (it does a lot)
require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const trailRoute = require('./routes/trails')


const app = express()

app.use(express.json())
app.use(cors())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//use the path api/trails if testing in Postman
app.use('/api/trails',trailRoute)


app.get("/messages", (req, res) => {
    res.send("Hello");
});

app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});

app.listen(3000, () => {
    console.log("listening on http://localhost:4000");
})




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