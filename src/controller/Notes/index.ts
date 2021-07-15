import express from 'express'

class Notes {
  load(req: express.Request, res: express.Response) {
    try {
      res.send({
        todos: [{ title: 'title 1' }, { title: 'title 2' }, { title: 'title 3' }],
      })
    } catch (err) {
      res.send(err.message)
    }
  }
}

export default new Notes()
