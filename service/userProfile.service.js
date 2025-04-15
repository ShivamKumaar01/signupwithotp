const{User}=require('../models')


exports.fileupload=async(req,res)=>{

    const file=req.body.file;
    const email=req.body.email;
    if(!file||!email){
        return res.status(401).send({
            success:false,
            message:"user credential not found"
        })
    }
   let response=await User.findOneAndUpdate({
    "email":email
   },{
    $set: {
        "image": req.body.file
    }
    
   },
   { new: true }, (err, doc) => {
    if (!err) { 

        // console.log(req.user.name);
        console.log(req.body.name);
      
    }
    else {
        console.log('Error during record update : ' + err);
    }
 })




//    if(!response){
//     return res.status(404).send({
//         success:false,
//         message:"user not found",

//     })
//    }
//    response.image=file;

}