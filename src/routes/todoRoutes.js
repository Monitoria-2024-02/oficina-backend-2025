import { Router } from "express";
import * as todoController from "../controller/todoController.js"

// api/v1/todos GET
// api/v1/todos POST
// api/v1/todos/1 UPDATE
// api/v1/todos/1 DELETE

const router = Router();

router.post('/', todoController.createTodo);
router.get('/', todoController.getTodos);
router.put('/:id', todoController.toggleTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
