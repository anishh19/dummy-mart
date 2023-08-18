import mongoose from "mongoose";

const connnectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connnectMongoDB;
