import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://imrealityyyyy:ilovemongodb123@cluster0.n6h1aki.mongodb.net/blog-app');
    console.log("DB Connected");
}
