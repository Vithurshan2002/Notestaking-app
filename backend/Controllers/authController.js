const { usermodel } = require("../Server");

exports.userRegister = async (req, res, next) => {
  const { username, email, Contact, password, Profile_picture } = req.body;
  /*   console.log(username,email,Contact,Contact,password,Profile_picture); */
 
  try {
    const data = await usermodel.create({
      username: username,
      email: email,
      Contact: Contact,
      password: password,
      Profile_picture: Profile_picture,
    });
    console.log("Data is stored SuccessFully", data);
    res.json({ message: data });
  } catch (error) {
    console.log("Unable to store:", error.message);
    next(error);
  }
};
