


// verify token

  /*verifyToken : (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  if (!token) {
    res.status(404).json({ message: "No token found" });
  }
  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Invalid TOken" });
    }
    console.log(user.id);
    req.id = user.id;
  });
  next();
},*/


/*

// token

const token = jwt.sign({ id: verifUser._id }, process.env.JWT_SECRET_KEY, {expiresIn: "35s",});

  console.log("Generated Token\n", token);

  if (req.cookies[`${verifUser._id}`]) {
    req.cookies[`${verifUser._id}`] = "";
  }

  res.cookie(String(verifUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30), // 30 seconds
    httpOnly: true,
    sameSite: "lax",
  });


  return res.status(200).json({message:"logged in with success ", user: existingUser, token });


*/



/*
logout :(req, res, next) => {
  const cookies = req.headers.cookie;
  const verifToken = cookies.split("=")[1];
  if (!verifToken) {
    return res.status(400).json({ message: "Couldn't find token" });
  }
  jwt.verify(String(verifToken), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Authentication failed" });
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] = "";
    return res.status(200).json({ message: "Successfully Logged Out" });
  });
}

}
*/



/* try{
  const{email, password} = req.body;
  const verifUser = await Users.findOne({email})
  if (!verifUser) 
    return res.status(400).json({ msg: 'User does not exist' });
// password valid
  const isPasswordValid =  await bcrypt.compare(password, verifUser.password); // when the user sings up his password is encrypted before it is saved in the database.
  if (!isPasswordValid) return res.status(400).json({message: "Invalid password"})
  const accesstoken = createAccessToken({ id: verifUser._id });
  res.json({ accesstoken }); 
} catch (err) {
  return new Error(err);
  }
}, 
*/