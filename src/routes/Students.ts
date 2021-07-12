import express from 'express'
import * as controller from '../controller'

const Students = express.Router()

Students.get('/', controller.Students.load)
  .get('/:id', controller.Students.load)
  .post('/', controller.Students.add)
  .put('/:id', controller.Students.update)
  .delete('/:id', controller.Students.remove)

export default Students
