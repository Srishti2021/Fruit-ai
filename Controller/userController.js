const user_detailed_description = require('../Model/userModel')
const bcrypt = require('bcrypt')
const register_user = async(req , res)=>{
    try {
        const {user_name , user_email , user_password} = req.body;
        if( !user_email  || !user_name || !user_password){
            return res.status(400).json({
                message : "Please fill in all fields"
            })
        }
        const exisiting_user = await user_detailed_description.findOne({user_email});
        if ( exisiting_user){
            return res.status(400).json({  message : "User already exists"})
        }
       
    const salted_credentials = await bcrypt.genSalt(10);
    const hashed =  await bcrypt.hash(user_password , salted_credentials)
        const new_user = new user_detailed_description({user_email , user_name , user_password : hashed})
        await new_user.save();
        return res.status(200).json({
            success: true,
            message : "User Registered Successfully",
            user : new_user
        })
    }catch(error){
        return res.status(400).json({
            message :  "something went wrong"
        })
    }
        
}
 const login_user = async(req , res)=>{
    try{
        const {user_email , user_password }=  req.body;
        if( !user_email  || !user_password){
            return res.status(400).json({
                message : "Please fill in all fields"
            })
        }
        const exisiting_user = await user_detailed_description.findOne({user_email});
        if ( !exisiting_user){
            return res.status(400).json({  message : "User doesn't exists"})
        }
        const is_valid_password = await bcrypt.compare(user_password , exisiting_user.user_password);
        if(!is_valid_password){
            return res.status(400).json({  message : "Invalid Password"})
        }
        return res.status(200).json({
            success : true ,
            message : "User logged in successfully",
            user : exisiting_user
        })
    }catch(error){
        return res.status(400).json({
            message :  "something went wrong"
        })
    }
}


module.exports =  {register_user , login_user}