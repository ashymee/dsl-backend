import cors from 'cors'
import express from 'express'

const app = express()

app.use(express.json()).use(cors())

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('<h1>Welcome..</h1>')
})

const port = process.env.PORT || 9999
app.listen(port, () => console.info(`server is running on post: ${port}`))
