const{userProfileService}=require('../service')
exports.insertImage = async (req, res) => {
  console.log("ye request hai",req)
  console.log(req.body.email,"kuch aaya hai ya nahi");
  try {
      const user = await userProfileService.fileupload(
       
        req.body.email,
        req.file,
          
      );
      console.log(user)
    
      

      res.status(201).json({ message: "file added successfully" });
  } catch (error) {
      console.log(error.message,"yaha error hai kya");
      res.status(500).json({ message: "internal server error" });
  }
};
