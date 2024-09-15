const mongoose = require('mongoose')


const faq_detailed_schema = mongoose.Schema({
    
    image_url :{
        type:String,
        required:true
    },
    faq_image_name : {
        type:String,
        required:true
    },
    question_title :{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    }

})


const faq_detailed_description = new mongoose.model('FAQ' , faq_detailed_schema)
module.exports = faq_detailed_description