const main = require('./mongodb')
// main().then((rew)=>{
// rew.find().toArray().then((data)=>{
//     console.log(data);

// })

// });

let data =async ()=>{
    let data1 =await main();
    data =await data1.find().toArray();
    console.log(data)
}
data();