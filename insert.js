const main = require('./mongodb');

let insert = async ()=>{
    let data = await main();
    let result = await data.insert(
        {name:"a555",mobil_no:"1231548484",addres:"bjdfb"}
    )
    console.log(result)

}
insert();