import { Router } from "express";
import {
  getTodos,
  addTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router: Router = Router();

router.get("/todos", getTodos);

router.get("/add-todo", addTodos);

router.get("/edit-todo/:id", updateTodo);

router.get("/delte-todo/:id", deleteTodo);

export default router;
