const express = require('express');
const main = require('./mongodb')
const mongodb = require('mongodb')

const app = express();

app.use(express.json());

app.get('/', async(req, res) => {
    let data = await main();
    let data1 = await data.find().toArray();
    //console.log(data1)
    res.send(data1)
})
app.post('/',async(req,res)=>{
    let data = await main();
    let result = await data.insert(req.body);
    //console.log()
    res.send(result)

})
app.put('/:name',async(req,res)=>{
    let data = await main();
    let result = await data.updateOne(
        {name: req.params.name},
        {$set: req.body}
   );
    res.send(result)
})

app.delete('/:id',async(req,res)=>{
    let data = await main();
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})

    res.send(result);
})
 
app.listen(3000)