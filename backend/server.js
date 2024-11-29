/* eslint-disable no-undef */
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import todo from "./routes/todo.js";

const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "src", "App.jsx")));

// Allow server to interact with the front end.
let corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.use("/api/todo", todo);

app.listen(PORT || 8000, () => {
  console.log(`Server running on ${PORT}`);
});
