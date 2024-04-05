import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();

const port = process.env.PORT || 8800;

app.use(express.json());
app.use(cors());

const getUsers = (_, res) => {
  const select = "SELECT * FROM usuarios";

  db.query(select, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

const addUsers = (_, res) => {
  const add =
    "INSERT INTO `crud`.`usuarios` ( `nome`, `email`, `fone`, `data_nascimento`) VALUES (?);";
};

app.use("/", getUsers);
app.post("/", addUsers);

app.listen(port, () => {
  console.log("Rodando na porta");
});
