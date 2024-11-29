/* eslint-disable no-undef */
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

let corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api/todo", (req, res) => {
  res.json("Hey From the backend");
});

app.listen(PORT || 8000, () => {
  console.log(`Server running on ${PORT}`);
});
