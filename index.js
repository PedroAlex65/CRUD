import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();

app.use(express.json());
app.use(cors());

const getUsers = (_, res) => {
  const select = "SELECT * FROM usuarios";

  db.query(select, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

app.use("/", getUsers);

app.listen("8800", () => {
  console.log("Rodando na porta");
});
