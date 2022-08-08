import bcryptjs from "bcryptjs";
import User from "../models/users.js";
import jwt from "jsonwebtoken";


export const registetUser = async (req, res, next) => {
  const { name,  email, password} = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) return res.status(400).json("user already exit");
    

    const hashedPassword = bcryptjs.hashSync(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.jwt_secret, {
      expiresIn: "1d",
    });

   

 

    await newUser.save();
    res.json({ token });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password, } = req.body;
  try {
 
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    
    const checkpassword = await bcryptjs.compare(password, user.password);

    if (!checkpassword) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid Credentials...." }] });
    }

    const userId = user._id;

   

    const token = await jwt.sign(
      { user: { id: userId } },
      process.env.jwt_secret,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (error) {
    console.log("error in login", login);
    next(error);
  }
};
