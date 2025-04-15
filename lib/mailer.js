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
      text: "clik on this to verify", // plain text body
     html: `<a href="https://www.google.com">Click here to verify</a>`
    
  }

  try{
    const result= await transporter.sendMail(mailOptions)
    console.log("email send successfully");
    res.status(200).json({ message: "Email sent successfully" });
  }
  catch(error){
    console.log("hui")
    // console.log(error.message);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
  
  
 
}


