import Users from "../Models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const userIsExit = await Users.findOne({ email });

    if (userIsExit) return res.status(400).json("email đã tồn tại");

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await Courses.create({ ...req.body, password: hashPassword });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const signin = async (req, res) => {
  try {
    const userIsExit = await Users.findOne({ email });

    if (!userIsExit) return res.status(400).json("email đã tồn tại");

    const comparePassword = await bcrypt.compare(
      req.body.password,
      userIsExit.password
    );

    const token = jwt.sign(
      { _id: userIsExit._id, role: userIsExit.role },
      "admin",
      { expiresIn: "1h" }
    );

    return res.status(201).json(token);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
