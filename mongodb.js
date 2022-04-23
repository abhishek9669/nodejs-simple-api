const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


async function main(){
    let result = await client.connect();
     d = result.db('code-step-by-step');
    return d.collection('node tut');
    // let res = await collection.find({name: 'abhishek'}).toArray();
    // console.log(res);

}

module.exports = main;