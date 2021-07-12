import express from 'express'
import * as config from '../../config'

export const remove = async (
  req: express.Request,
  res: express.Response
): Promise<void | express.Response> => {
  const { id } = req.params

  try {
    const student = config.collections.students.doc(id)
    await student.delete()
    res.send(`Data has been deleted successfully.`)
  } catch (error) {
    res.send(error.message)
  }
}
