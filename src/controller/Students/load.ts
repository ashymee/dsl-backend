import express from 'express'
import * as config from '../../config'
import * as model from '../../model'

export const load = async (
  req: express.Request,
  res: express.Response
): Promise<void | express.Response> => {
  const { id } = req.params

  try {
    if (!id) {
      const db = await config.collections.students.get()
      const arr: model.Students[] = []
      db.forEach((doc) => {
        const student = new model.Students({
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          classEnrolled: doc.data().classEnrolled,
          age: doc.data().age,
          phone: doc.data().phone,
          subject: doc.data().subject,
          year: doc.data().year,
          semester: doc.data().semester,
          status: doc.data().status,
        })
        arr.push(student)
      })
      return res.send(arr)
    } else {
      const student = config.collections.students.doc(id)
      const db = await student.get()
      if (!db.exists) return res.status(404).send('Not found.')
      return res.send(db.data())
    }
  } catch (error) {
    res.send(error.message)
  }
}
