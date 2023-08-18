import User from "../../models/user";
import connnectMongoDB from "../../libs/mongodb";
const bcrypt = require("bcryptjs");

export default async function handler(req, res) {
  if (req.method === "POST") {
    connnectMongoDB();
    const { name, email, password } = req.body;
    console.log(name, email, password);
    if (!name || !email || !password) {
      res.status(400).json({ message: "Enter all data" });
      console.log("Enter all data");
    } else {
      //check if user exists
      const userExists = await User.findOne({ email: email });
      if (userExists) {
        res.status(400).json({ message: "User Already Exists" });
        console.log("User Already Exists");
      } else {
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
          name: name,
          email: email,
          password: hashedPassword,
        });

        if (user) {
          res.status(201).json({
            _id: user.ID,
            name: user.name,
            email: user.email,
          });
          console.log("sucessfull");
        } else {
          res.status(400).json({ message: "Invalid User Data" });
          console.log("Invalid User Data");
        }
      }
    }
  }
}
