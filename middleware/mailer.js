const nodemailer = require("nodemailer");
exports.sendMailerFunction=async(req,res)=>{
  console.log("this is requeset",req)
  console.log(req.body.email,"ye kya aaya")
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "shivamkumaar01@gmail.com",
      pass: "nkqu jpqr ggnh tccl",
    },
  });
  const mailOptions = {
   
      from: 'shivamkumaar01@gmail.com', // sender address
      to: req.body.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    
  }

  try{
    const result= await transporter.sendMail(mailOptions)
    console.log("email send successfully");
  }
  catch(error){
    console.log("hui")
    console.log(error.message);
  }
  
  
 
}


