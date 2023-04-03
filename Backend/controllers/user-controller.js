const Users = require("../models/User-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
  //sign up
  signup: async (req, res) => {
    try {
      const { name, adress, phoneNumber, email, password } = req.body;
      const verifUser = await Users.findOne({ email });

      if (verifUser) {
        return res.status(400).json({ message: "user already exists" });
      }

      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "password is at least 6 characters long" });
      }

      // crypted password
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new Users({
        name,
        adress,
        phoneNumber,
        email,
        password: hashedPassword,
      });
      //true

      // save on bd
      await user.save();
      //false

      ///create jsonwebtoken to authentication
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
      });

      res.json({ user, accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  //login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      /////
      if (!user) return res.status(400).json({ msg: "User does not exist" });
      const isMatch = await bcrypt.compare(password, user.password);
      /////
      if (!isMatch) return res.status(400).json({ msg: "Incorrect Password" });
      ///if login success create access token and refresh token
      /* res.json({ msg: 'Login success <3 ' });*/
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
      });

      res.json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.meassage });
    }
  },
  // LOGOUT
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh" });
      return res.json({ msg: "logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.meassage });
    }
  },
  //refresh token
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "please Login or Register" });
      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(400).json({ msg: "please Login or Register" });
        const accesstoken = createAccessToken({ id: user.id });
        res.json({ accesstoken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.meassage });
    }
  },
  // GET USER
  getUser: async (req, res) => {
    const userId = req.id;
    let user;
    try {
      user = await Users.findById(userId).select("-password");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
    if (!user) {
      return res.status(400).json({ messsage: "User Not Found" });
    }
    return res.status(200).json({ user });
  },
  PasswordReset: async (req, res) => {
    const nodemailer = require("nodemailer");
    const { email } = req.body;
    var transport = nodemailer.createTransport({
      /*host: 'smtp.gmail.com',
        port: 465,
        secure: true,*/
      service: "Gmail",
      auth: {
        user: "boubakerranya0@gmail.com",
        pass: "enmhbpvunpuwxtuh",
      },
    });
    var mailOptions = {
      from: "boubakerranya0@gmail.com",
      to: email ,
      subject: "Sending Email using Node js",
      html: "<h1> you can follow this link : http://localhost/api/resetaccount  to reset your account   </h1>",
    };
    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail send successfully:-", info.response);
        return res.status(200).json({ msg: "Mail send successfully" });
      }
    });
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};
module.exports = userController;
