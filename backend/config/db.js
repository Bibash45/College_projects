import mongoose from "mongoose";
export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:984562@cluster0.lajjlar.mongodb.net/food-del').then(()=>{
      console.log("DB connected")
    });

}