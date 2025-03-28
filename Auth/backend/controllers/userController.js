import { User } from "../models/userModel.js";

// register user

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });

    res.send({ message: "user created successfully", user });
  } catch (error) {
    res.send({ message: error.message });
  }
};
