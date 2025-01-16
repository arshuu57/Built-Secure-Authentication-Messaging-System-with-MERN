//impotation of the mongoose package
const mongoose = require('mongoose');

//importation of the connection string from dot env file
const db = process.env.DATABASE;

mongoose.connect(db, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>{
    console.log(e);
})
