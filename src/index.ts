import express from "express";
import { usersRouter } from "./routes/users.routes";
import { authRouter } from "./routes/auth.routes";
import { productsRouter } from "./routes/products.routes";

const app = express();

app.use(express.json())

const PORT = process.env.PORT

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)

app.listen(PORT, () => {
    console.log(`listening port ${PORT}`)
})