import express from "express";
import cors from "cors";
import authController from "./controllers/authController.js";
import handleErrors from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

app.get("/users", authController.getAllUsers);
app.get("/users/:id", authController.getUserById);
app.post("/register", authController.registerUser);
app.post("/login", authController.loginUser);

app.use(handleErrors);
