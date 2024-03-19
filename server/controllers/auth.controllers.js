import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

//signup controller
export const signup = async (req, res) => {
  try {
    const {fullName, userName, password, confirmPassword, gender} = req.body;

    if (password !== confirmPassword) {
      return res.status (400).json ({error: "password don't match"});
    }

    const user = await User.findOne ({userName});

    if (user) {
      return res.status (400).json ({error: 'Username already exists'});
    }

    //Hash password
    const salt = await bcrypt.genSalt (10);
    const hashPassword = await bcrypt.hash (password, salt);

    // https://avatar-placeholder.iran.liara.run/

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;


    const newUser = new User ({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie (newUser._id, res);
      await newUser.save ();

      res.status (201).json ({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic
      });
    } else {
      res.status (400).json ({error: 'invalid user data'});
    }
  } catch (error) {
    console.log ('error in the signup controller', error.message);
    res.status (500).json ({error: 'Internel Server Error'});
  }
};

//login controller
export const login = async (req, res) => {
  try {
    const {userName, password} = req.body;
    const user = await User.findOne ({userName});
    const isPasswordCorrect = await bcrypt.compare (password, user?.password || "");

    if(!user || !isPasswordCorrect){
      res.status(400).json({error:"invalid user"})
    }

    generateTokenAndSetCookie(user._id,res)

    res.status(200).json({
      _id:user._id,
      fullName:user.fullName,
      userName:user.userName,
      profilePic: newUser.profilePic
    })
  } catch (error) {
    console.log ('error in login controller',error.message);
    res.status(500).json({error:"internal server error"})
  }
};

//logout controllerr
export const logout = (req, res) => {
  try {
    res.cookie("JWT","",{maxAge:0})
    res.status(200).json({message:"Logout Successfully"})
  } catch (error) {
    console.log ('error in logout controller');
    res.status(500).json({error:"internal server error"})
  }
};
