const express = require('express');
const cors = require('cors');
const { response } = require('express');
const { Mongoose } = require('mongoose');
const app = express();
const mongoose=require("mongoose");
const port = 3001;
const clusterUrl ="mongodb+srv://momento2:1122@cluster0.hrhgh.mongodb.net/DATES"
app.use(cors({ origin: true}));
app.use(express.json());


app.post('/CreateRegystre', async (req, res) => {
    const {name, id, email, password} = req.body;
    console.log(`NAME:${name}  ID:${id} EMAIL:${email} PASSWORD:${password}`)
    const db = await mongoose.createConnection(clusterUrl,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex:true});
    const collectionTasks = db.collection('REGYSTRE');
    const data = await collectionTasks.insertOne(req.body);
    console.log(data);
    res.json(req.body);
});

app.post('/CreateDates', async (req, res) => {
    const {name, lastname, id, email, phone, date} = req.body;
    console.log(`NAME:${name}  LASTNAME${lastname} ID:${id} EMAIL:${email} PHONE:${phone} DATE:${date}`)
    const db = await mongoose.createConnection(clusterUrl,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex:true});
    const collectionTasks = db.collection('DATES');
    const data = await collectionTasks.insertOne(req.body);
    console.log(data);
    res.json(req.body);
});

app.delete('/DeleteRegystre', async (req,res) => {
    const {id} =req.body;
    console.log(`EL ID A ELIMINAR ES: ${id}`);
    const db = await mongoose.createConnection(clusterUrl,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex:true});
    const collectionTasks = db.collection('REGYSTRE');
    const data=await collectionTasks.deleteOne(req.body);
    console.log(data);
    res.json(req.body);
});

app.delete('/DeleteDates', async (req,res) => {
    const {id} = req.body;
    console.log(`EL ID A ELIMINAR ES: ${id}`);
    const db = await mongoose.createConnection(clusterUrl,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex:true});
    const collectionTasks = db.collection('DATES');
    const data=await collectionTasks.deleteOne(req.body);
    console.log(data);
    res.json(req.body);
});

app.put('/PutRegystre', async (req, res,) => {
    const {id, name, email, password} = req.body;
    console.log(`ID:${id}`);
    const db = await mongoose.createConnection(clusterUrl,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex:true});
    const collectionTasks = db.collection('REGYSTRE');
    const data = await collectionTasks.updateOne({id:id},{ $set: {name:name, email:email, password:password} });
    console.log(data);
    res.json(req.body);
});

app.put('/CreatePutDates', async (req, res,)=>{
    const {id, name, lastname, email, phone, date} = req.body;
    console.log(`ID:${id}`);
    const db = await mongoose.createConnection(clusterUrl,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex:true});
    const collectionTasks=db.collection('DATES');
    //const data=await collectionTasks.findOne({id});
    const data = await collectionTasks.updateOne({id:id},{ $set: {name:name, lastname:lastname, email:email, phone:phone, date:date} });
    console.log(data);
    res.json(req.body);
});

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})