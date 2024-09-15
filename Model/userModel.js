const mongoose = require('mongoose')


const user_detailed_schema = mongoose.Schema({
    user_name :{
        type : String,
        required : true
    },
    user_email :{
        type : String,
        required : true
    },
    user_password:{
        type : String,
        required : true
    }
})


const user_detailed_description = new mongoose.model('user' , user_detailed_schema)

module.exports = user_detailed_description
