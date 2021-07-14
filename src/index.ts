import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import * as config from './config'
import appRouter from './routes'

dotenv.config()

const app = express()

app.use(express.json()).use(cors()).use(bodyParser.json()).use('/api', appRouter)

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('<h1>Welcome..</h1>')
})

const port = process.env.PORT || 9999
app.listen(port, () => console.info(`server is running on ${config.global.url} :${port}`))
