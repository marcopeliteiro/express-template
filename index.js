import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Backend rodando com TypeScript e Imports!" });
});

app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`);
});
