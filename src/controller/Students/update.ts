import express from 'express'
import * as config from '../../config'

export const update = async (
  req: express.Request,
  res: express.Response
): Promise<void | express.Response> => {
  const { id } = req.params
  const data = req.body

  try {
    const student = config.collections.students.doc(id)
    await student.update(data)
    res.send('Data has been updated successfully.')
  } catch (error) {
    res.send(error.message)
  }
}
