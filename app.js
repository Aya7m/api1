import express from 'express'

import userRouter from './modules/users/users.routers.js'
import postesRouter from './modules/posts/posts.routers.js'
import cors from "cors"
const app = express()

app.use(cors())

const port = process.env.port || 3000



app.use(express.json())



app.use('/auth',userRouter)
app.use('/posts',postesRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))