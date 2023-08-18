import connnectMongoDB from "../../libs/mongodb";

export default function (req, res) {
  connnectMongoDB();
  res.status(200).json({ message: "hi" });
}
