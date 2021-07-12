import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import * as config from './config'
import * as router from './routes'

dotenv.config()

const app = express()

app
  .use(express.json())
  .use(cors())
  .use(bodyParser.json())
  .use('/api/students', router.Students)

app.get('/', (req: express.Request, res: express.Response) => {
  res.render('Welcome..')
})

app.listen(config.global.port, () =>
  console.info(`server is running on ${config.global.url}:${config.global.port}`)
)