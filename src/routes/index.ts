import express from 'express'
// import notesRouter from './notesRouter'
import studentsRouter from './studentsRouter'
// import usersRouter from './usersRouter'

const appRouter = express.Router()

appRouter
  // .use('/users', usersRouter)
  .use('/students', studentsRouter)
// .use('/notes', notesRouter)

export default appRouter
