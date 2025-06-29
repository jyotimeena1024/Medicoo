import validator from "validator";
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModels.js";
import jwt from 'jsonwebtoken';

const addDoctor = async (req, res) => {
  try {
      // Log the incoming request
      console.log("Received body:", req.body);
      console.log("Received file:", req.file);

      const {
        name,
        email,
        password,
        speciality,
        degree,
        experience,
        about,
        fees,
        address
      } = req.body;

      const imageFile = req.file;

      // Check for missing fields
      if (
        !name || !email || !password || !speciality || !degree || !experience ||
        !about || !fees || !address || !imageFile
      ) {
        return res.json({ success: false, message: "Missing Details" });
      }
      //status(400).

      // Validate email format
      if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Please enter a valid email" });
      }

      // Validate password strength
      if (password.length < 8) {
        return res.json({ success: false, message: "Please enter a strong password" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);


     // upload image to cloudinary
     const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
     const imageUrl=imageUpload.secure_url


      // Create doctor object
      const doctorData = {
        name,
        email,
        image: imageUrl,
        password: hashedPassword,
        speciality,
        degree,
        experience,
        about,
        fees, 
        address: JSON.parse(address),
        date: Date.now()
      };

      const newDoctor = new doctorModel(doctorData);
      await newDoctor.save();
      

      res.json({ success: true, message: "Doctor Added" });
    //(201).json
    } catch (error) {
      console.log( error)
      res.json({ success: false, message: error.message });
    }
    //status(500)
};
//API for admin login
const loginAdmin=async (req,res) => {
  try{
    const {email,password}=req.body

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
          const token=jwt.sign(email+password,process.env.JWT_SECRET)
          res.json({success:true,token})
    }else{
      res.json({success:false,message:"Invalid credentials"})
    }
    
  }catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
  }
}
// API to get all doctor list for admin panel
const allDoctors=async(req,res)=>{
  try{
      
    const doctors=await doctorModel.find({}).select('-password')
    res.json({success:true,doctors})
  }catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
  }
}

export { addDoctor,loginAdmin,allDoctors};

