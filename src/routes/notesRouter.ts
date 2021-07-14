import express from 'express'
import { Notes } from '../controller'
import middlewares from '../middlewares'

const notesRouter = express.Router()

notesRouter.get('/', middlewares.decodeToken, Notes.load)

export default notesRouter
