import express from 'express'
import 'dotenv/config';
import { userRouter } from './routes/signupRoutes.js';
import { gameRouter } from './routes/gameRoutes.js';
const PORT = process.env.PORT

const app = express();
app.use(express.json())

app.use('/user',userRouter)
app.use('/game',gameRouter)


app.listen(PORT, () =>{
    console.log(`now listening on port ${PORT}`)
})