import express from 'express'
import * as config from '../../config'
import * as model from '../../model'

class Students {
  async load(req: express.Request, res: express.Response) {
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

  async add(req: express.Request, res: express.Response) {
    const data = req.body

    try {
      await config.collections.students.doc().set(data)
      res.send('Record saved successfully.')
    } catch (err) {
      res.send(err.message)
    }
  }

  async update(req: express.Request, res: express.Response) {
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

  async remove(req: express.Request, res: express.Response) {
    const { id } = req.params

    try {
      const student = config.collections.students.doc(id)
      await student.delete()
      res.send(`Data has been deleted successfully.`)
    } catch (error) {
      res.send(error.message)
    }
  }
}

export default new Students()
