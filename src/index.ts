import express from "express";
import { usersRouter } from "./routes/users.routes";

const app = express();

app.use(express.json())

const PORT = process.env.PORT

app.use('/api/users', usersRouter)

app.listen(PORT, () => {
    console.log(`listening port ${PORT}`)
})