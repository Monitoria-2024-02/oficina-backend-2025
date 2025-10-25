import { createTodoService, deleteTodoService, getTodoService, toggleTodoService } from '../service/todoService.js'

export async function createTodo(req, res) {
    try {
        const { title } = req.body;
        const newTodo = await createTodoService(title)
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
} 

export async function getTodos(_, res) {
    try {
        const todos = await getTodoService();
        res.status(200).json(todos)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

export async function toggleTodo(req, res) {
    try {
        const { id } = req.params
        const updatedTodo = await toggleTodoService(id);
        res.json(updatedTodo)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

export async function deleteTodo(req, res) {
    try {
        const { id } = req.params
        await deleteTodoService(id);
        res.status(204).end()
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}