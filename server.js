import express from 'express'
import 'dotenv/config';
const PORT = process.env.PORT

const app = express();
app.use(express.json())


app.get('/main',(req,res) => {
    res.send('fuck you')
} )


app.listen(PORT, () =>{
    console.log(`now listening on port ${PORT}`)
})