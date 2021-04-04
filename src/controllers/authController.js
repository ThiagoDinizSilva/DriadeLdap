const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ name });

    if (!user) {
      let newUser = new User({ name, email, password });

      await newUser.save();

      return res.status(200).json({ msg: "user successfully created" });
    }

    return res
      .status(400)
      .json({ error: ["Username already registered "] });
  } catch (e) {
    return res.status(500).json({ error: ["some error occured"] });
  }
};

const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    let user = await User.findOne({ name });

    if (!user) return res.send("Invalid Username or Password");

    if (await user.comparePassword(password)) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: "20m",
      });
      return res.status(200).json({ msg: "user logged in", token });
    } else{ 
      return res.send("Invalid Username or Password");
    }
  } catch (e) {
    res.send("Something went wrong, contact the Administrator! Code: SCAUTH-44");
  }
};


module.exports = {
  login,
  signup,

};