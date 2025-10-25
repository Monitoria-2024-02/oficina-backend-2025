import { pool } from "./db.js";

const sql = `
    CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        completed BOOLEAN DEFAULT FALSE
    )
`;

async function init() {
    await pool.query(sql)
    console.log("Tabela todos criada ou já existente")
    process.exit()
}

init()