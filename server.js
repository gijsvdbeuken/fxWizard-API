import express from "express";
import { getUsers, getUser, createUser } from "./db.js";

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.send(user);
});

app.get("/users", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await createUser(name, email, password);
  res.status(201).send(user);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
/*
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.options("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Length, X-Requested-With"
  );
  res.send(200);
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use(express.static("public"));
app.use(express.static("css"));

const timeRoutes = require("./routes/time");
const nameRoutes = require("./routes/name");
const jsonRoutes = require("./routes/json");
const echoAllRoutes = require("./routes/echo-all");

app.use("/routes/time", timeRoutes);
app.use("/routes/name", nameRoutes);
app.use("/routes/json", jsonRoutes);
app.use("/routes/echo-all", echoAllRoutes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app.all("*", (req, res) => {
  res.send("Invalid route");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
*/
