import express from 'express'
import * as config from '../config'

class Middlewares {
  async decodeToken(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const token = req.headers.authorization?.split(' ')[1]

    try {
      const decodedValue =
        token && (await config.firebaseAdmin.auth().verifyIdToken(token))

      console.log('decodedValue::', decodedValue)

      if (decodedValue) return next()

      return res.send({ message: 'Unauthorized' })
    } catch (error) {
      res.send(error.message)
    }
  }
}

export default new Middlewares()
