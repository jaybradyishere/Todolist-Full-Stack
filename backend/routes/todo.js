import express from "express";
import { getTodos, createTodo } from "../controllers/todoController.js";

const router = express.Router();

// Get todos
router.get("/", getTodos);

// Create todo
router.post("/", createTodo);

export default router;
