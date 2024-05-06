const express = require('express');
const app = express();

const animalModel = require('./animalmodel');

app.get('/', (req, res) => {
    res.send("hey");
})

app.get('/create', async  (req, res)=>
{
    let createanimal = await animalModel.create({
        name: "lion",
        specises: "danger",
        age: "15"

    })
    res.send(createanimal);
})

app.get('/update', async  (req, res)=>
    {
       let updateanimal = await animalModel.findOneAndUpdate({specises: "danger"}, {name: "lion sher khan"}, {new: true} )
    
        
        res.send(updateanimal);
    })

    app.get('/read', async  (req ,res)=>
    {
        let animal = await animalmodel.find();
        res.send(animals);
    })

    app.get('/delete', async  (req, res)=>
        {
            let animals = await animalModel.findOneAndDelete({name:"lion"});
                res.send(animals);
        
            })
        
    
app.listen(3000);