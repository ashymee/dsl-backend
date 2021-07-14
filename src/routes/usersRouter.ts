import express from 'express'
import * as controller from '../controller'

const usersRouter = express.Router()

usersRouter.get('/', controller.Users.load)

export default usersRouter
