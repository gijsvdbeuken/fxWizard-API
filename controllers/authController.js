import { loginTheUser, getUsers, getUser, createUser } from "../queries/db.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    console.error("Users retrieve error:", error);
    res.status(500).json({ message: "Retrievement Failed" });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    res.send(user);
  } catch (error) {
    console.error("User retrieve error:", error);
    res.status(500).json({ message: "Retrievement Failed" });
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

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const isAuthenticated = await loginTheUser(email, password);

  if (isAuthenticated) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Login failed" });
  }
};

export default { loginUser, getAllUsers, getUserById, registerUser };
