const faq_detailed_description = require('../Model/faqModel')

const register_faq = async(req , res)=>{
    try {
        const {image_url , faq_image_name , question_title , description} = req.body;
        if(!image_url || !faq_image_name || !description || !question_title){
            return res.status(400).json({
                message : "Please fill in all fields"
            })
        }

        const new_faq = await new faq_detailed_description({image_url , description , faq_image_name , question_title})
        await new_faq.save();
        return res.status(200).json({
            success: true,
            message : "FAQ Registered Successfully",
            faq : new_faq
        })
    }catch(error){
        return res.status(400).json({
            message :  "something went wrong"
        })
    }
        
}

const get_all_faq = async(req  ,res)=>{
    try {
        const list_faq = await faq_detailed_description.find();
        if( !list_faq){
            return res.status(400).json({message :'List may be empty'})
        }
        return res.status(200).json({
            success:true,
            message : "FAQ List Retrieved Successfully",
            list_faq
        })
    }catch(error){
        return res.status(400).json({message :'Something went wrong'})
    }
}
const get_faq_by_id = async(req  , res)=>{
    try {
        const faq_selected = req.params.id
        const reterieved_faq = await faq_detailed_description.findById(faq_selected)
        if(!reterieved_faq){
            return res.status(400).json({message :'FAQ not found'})
        }
        return res.status(200).json({
            success: true,
            message : "FAQ Retrieved Successfully",
            reterieved_faq
        })

    }catch(error){
        return res.status(400).json({message :'Something went wrong'})
    }
}

const update_the_faq = async (req, res) => {
  try {
    const faq_selected = req.params.id; // Extract FAQ ID from request parameters
    const updateFields = req.body; // Extract update fields from request body

    // Update the FAQ document by ID
    const updatedFAQ = await faq_detailed_description.findByIdAndUpdate(
      faq_selected, // The ID of the FAQ to update
      { $set: updateFields }, // Use $set to apply updates
      { new: true } // Option to return the updated document
    );

    // Check if the FAQ was found and updated
    if (!updatedFAQ) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    // Return success response
    res.status(200).json({
      success: true,
      message: 'FAQ Updated Successfully',
      updatedFAQ
    });
  } catch (error) {
    console.error('Error updating FAQ:', error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to update FAQ' });
  }
};

module.exports = { update_the_faq };


const delete_faq = async(req , res)=>{
    try {
        const  faq_selected = req.params.id
        const reterieved_faq = await faq_detailed_description.findById(faq_selected)
        if(!reterieved_faq){
            return res.status(400).json({message :'FAQ not found'})
        }
        await faq_detailed_description.findByIdAndDelete(faq_selected)
        return res.status(200).json({
            success: true,
            message : "FAQ Deleted Successfully",
        })
    }catch(error){
        return res.status(400).json({message :'Something went wrong'})
    }
}

module.exports = {register_faq , get_all_faq , get_faq_by_id , delete_faq , update_the_faq}