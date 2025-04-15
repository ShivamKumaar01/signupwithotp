const { authService } = require('../service')
exports.createUser = async (req, res) => {
  try {
    const user = await authService.create(req, res)

    res.status(201).json({ message: "user added successfully" })
  }
  catch (error) {
    console.log("error in createuser", error)
    res.status(500).json({ message: "internal server error" });
  }
}

exports.loginUser = async (req, res) => {
  try {
    const user = await authService.login(req, res);
    res.status(200).json({ user, message: "user loggedin successfully" });
  }
  catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
}