import { pool } from "../db/db.js"

// CRUD
// C = CREATE
// R = READ
// U = UPDATE
// D = DELETE

export async function createTodoService(title) {
    const { rows } = await pool.query("INSERT INTO todos (title) VALUES ($1) RETURNING *", [title]);
    return rows[0];
}

export async function getTodoService() {
    const { rows } = await pool.query("SELECT * FROM todos");
    return rows;
}

export async function toggleTodoService(id) {
    const { rows } = await pool.query("UPDATE todos SET completed = NOT completed WHERE id = $1 RETURNING *", [id]);
    return rows[0];
}

export async function deleteTodoService(id) {
    const { rowCount } = await pool.query("DELETE FROM todos WHERE id = $1", [id])
    return rowCount > 0;
}
