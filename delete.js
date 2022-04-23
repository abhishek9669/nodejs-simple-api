const main = require('./mongodb')

let delete1 =async ()=>{
    let  db = await main();
    let res =await db.deleteMany({name : 'Ashish'})
    console.log(res)

}
delete1()