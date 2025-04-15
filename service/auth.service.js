const { User } = require('../models')
const{sendMailerFunction}=require('../lib/mailer')
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.create = async (req, res) => {
    console.log(req)
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    if (!name || !email || !password) {
        return res.status(401).send({
            success: false,
            message: "user credential not found",
        });
    }
    let existeduser = await User.findOne({ where: { email: email } });
    console.log(existeduser, "existed user hai ye")
    if (existeduser) {
        return res.status(409).send({
            success: false,
            message: "user already exist"
        })
    }
    const hash = await bcrypt.hash(password, saltRounds);
    if (!hash) {
        return res.status(500).send({
            success: false,
            message: "internal server error"
        })
    }
    let verificationCode = Math.floor(10000 + Math.random() * 90000).toString()
    const response = await User.create({ name, email, password: hash, verificationCode: verificationCode });
   
    if (!response) {
        return res.status(500).send({
            success: false,
            message: "internal server error"
        })
    }
    if(response){
        console.log("yaha tak to sahi hai bhai");
        await sendMailerFunction(req, res);
        // console.log("code yaha fat raha hai ")
    }
    return response;


}

exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        return res.status(401).send({
            success: false,
            message: "user credential not found",
        });
    }
    let loginUser = await User.findOne({ where: { email: email } });
    if (!loginUser) {
        return res.status(404).send({
            success: false,
            message: "user not found"
        })
    }
    if (!(await bcrypt.compare(password, loginUser.password))) {
        return res.status(401).send({
            success: false,
            message: "user credential not found || password galat hai bhai",
        });
    }
    const token = jwt.sign({ id: loginUser._id }, 'Zenmonk', {
        expiresIn: '4h'
    })
    if (!token) {
        return res.status(500).send({
            success: false,
            message: "error in token generation"

        })
    }
    return token;
}