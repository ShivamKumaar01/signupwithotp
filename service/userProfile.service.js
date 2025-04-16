
const { User } = require('../models');

exports.fileupload = async (email,file) => {
    // const email = req.body.email;
    // const file = req.file; 

    console.log("Uploaded file =>", file);
    console.log("Email =>", email);

    if (!file || !email) {
        // return res.status(401).send({
        //     success: false,
        //     message: "file or email missing"
        // });
        throw new Error("file oremail is missing",{})
    }

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            // return res.status(404).send({
            //     success: false,
            //     message: "user not found"
            // });
            throw new Error("user is missing")
        }

        user.image = file.filename; 
        await user.save();

        // return res.status(200).send({
        //     success: true,
        //     message: "Image uploaded successfully",
        //     user
        // });

    } catch (err) {
        console.error("Error hai file upload me", err);
        // console.log(err.message,"ye error hai")
        // return res.status(500).send({
        //     success: false,
        //     message: "internal server error"
        // });
    }
}
