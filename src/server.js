import express from 'express'
import cors from 'cors'
import todoRoutes from './routes/todoRoutes.js'

const app = express();

// middleware
// Req -> middleware -> Res

// api/v1/todos
app.use(cors())
app.use(express.json());

app.use("/todos", todoRoutes)

export default app;