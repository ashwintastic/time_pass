
const express = require('express');
const port = 3003;
const app = express();


app.use( function(req, res, next){
    console.log('hey server called:');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


app.get('/', function(req, res, next){
    console.log('hey im called');
    res.send({message: 'hi'})
});


const server = app.listen(port, function(error){
    if (error){
        console.log(`Error: ${error}`)
        return
    }
    console.log(`server is listining on ${port}, ${this}`)
});

