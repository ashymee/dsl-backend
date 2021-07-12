import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
  res.render('Welcome..')
})

const port = process.env.PORT || 9999
app.listen(port, () => console.info(`server is running on port: ${port}`))
