const main = require('./mongodb')
let updatedata = async ()=> {
    let data = await main();
    let result = await data.update(
        {name: 'a555'},{
            $set: {name: 'Ashish'}
        }
    )
    console.log(result)

}

updatedata()