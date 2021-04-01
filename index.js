const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const route = require('./routes/route');

app.use(bodyparser.json());

//cors
app.use(cors());

app.get('/', (req,res)=>{
    res.send("Hello..");
})

app.use('/api',route);

//connection with mongodb
mongoose.connect('mongodb://localhost:27071:',{useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false })

//on connection
mongoose.connection.on('connected',()=>{
    console.log("Connected with mongodb at port @20271");
})

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log("Error in connectiong to mongodb");
    }
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server is listening on port number : " +port)
})