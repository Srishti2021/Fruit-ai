const mongoose = require('mongoose')
const connection_DB_estaiblished = async()=>{
    try {
        const url_session = process.env.MONGO_URL
        if ( !url_session){
            console.log("URL session is not defined")
        }
        await mongoose.connect(url_session).then(()=>{
            console.log("Connection successful")
        }).catch((error)=>{
            console.log("Connection failed")
        })
           
    }catch(error){
        console.log("Error in connection")
    }
}

module.exports = connection_DB_estaiblished 