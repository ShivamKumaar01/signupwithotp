const{userProfileService}=require('../service')
exports.insertImage = async (req, res)=>{
    try {
      const user = await userProfileService.fileupload({data : req?.body})
      res.status(201).json({message : "file added successfully"})
    }
    catch (error) {
        console.log(error.message)
      res.status(500).json({message : "internal server error"});
    }
}