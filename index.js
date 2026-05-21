import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import ExampleRouter from "./routes/ExampleRouter.js";
import ejs from "ejs";
import path from "path";

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));
app.use(cors());
app.use(express.json());

app.use("/router", ExampleRouter);

app.get("/", (req, res) => {
  res.send({ message: "Backend rodando com TypeScript e Imports!" });
});

app.get("/view", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`);
});
