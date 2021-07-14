import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import * as config from './config'
import appRouter from './routes'

dotenv.config()

const app = express()

app
  .use(express.json())
  .use(cors())
  .use(bodyParser.json())
  .use('/', express.static('public'))
  .use('/api', appRouter)

const port = process.env.PORT || 9999
app.listen(port, () => console.info(`server is running on ${config.global.url} :${port}`))
