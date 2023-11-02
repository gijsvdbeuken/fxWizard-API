import { getUsers, getUser, createUser } from "../db.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration Failed" });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    res.send(user);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration Failed" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { user, pwd } = req.body;
    const email = "example@mail.com";
    const newUser = await createUser(user, email, pwd);
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration Failed" });
  }
};

export default { getAllUsers, getUserById, registerUser };
