//File is responsible for creating and launching routes:
//These are the requests that the backend makes to the
//database to send, change, and receive data.
const express = require('express')
const Trail = require("../models/trailModel")
const router = express.Router()

//get all dreamtrails
router.get('/', (req,res) => {
    res.json({mssg: 'Get ALL TRAILS'})
})

//get specific trail
router.get('/:id', (req,res)=>{
    res.json({mssg: 'Get a single Trail'})
})

router.delete('/:id',(req,res)=>{
    res.json({mssg: "delete a trail"})
})


router.post('/:id',async(req,res)=>{
    const {title, duration, time} = req.body
    try{
        const trail = await Trail.create({title, duration, time})
        res.status(200).json(trail)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a trail'})
})

module.exports = router