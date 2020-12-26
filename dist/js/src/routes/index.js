"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos_1 = require("../controllers/todos");
var router = express_1.Router();
router.get("/todos", todos_1.getTodos);
router.get("/add-todo", todos_1.addTodos);
router.get("/edit-todo/:id", todos_1.updateTodo);
router.get("/delte-todo/:id", todos_1.deleteTodo);
exports.default = router;