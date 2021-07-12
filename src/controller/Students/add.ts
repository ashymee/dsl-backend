import express from 'express'
import * as config from '../../config'

export const add = async (
  req: express.Request,
  res: express.Response
): Promise<void | express.Response> => {
  const data = req.body

  try {
    await config.collections.students.doc().set(data)
    res.send('Record saved successfully.')
  } catch (err) {
    res.send(err.message)
  }
}
