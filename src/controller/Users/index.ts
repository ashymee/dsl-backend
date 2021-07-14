import express from 'express'
import * as config from '../../config'
import * as model from '../../model'

class Users {
  async load(req: express.Request, res: express.Response) {
    const { id } = req.params

    try {
      // if (!id) {
      //   const db = await config.collections.users.get()
      const arr: model.Users[] = []
      //   db.forEach((doc) => {
      //     const users = new model.Users({
      //       id: doc.id,
      //       avatar: doc.data().avatar,
      //       bio: doc.data().bio,
      //       favoriteFood: doc.data().favoriteFood,
      //       name: doc.data().name,
      //       location: doc.data().location,
      //       themeColor: doc.data().themeColor,
      //     })
      //     arr.push(users)
      //   })
      //   return res.send(arr)
      // } else {
      //   const user = config.collections.users.doc(id)
      //   const db = await user.get()
      //   if (!db.exists) return res.status(404).send('Not found.')
      //   return res.send(db.data())
      // }

      const ref = config.collections.tweets
      const db = await ref.where('userID', '==', 'userOne').get()
      db.forEach((doc) => {
        const users = new model.Users({
          id: doc.id,
          avatar: doc.data().avatar,
          bio: doc.data().bio,
          favoriteFood: doc.data().favoriteFood,
          name: doc.data().name,
          location: doc.data().location,
          themeColor: doc.data().themeColor,
        })
        arr.push(users)
      })
      res.send(arr)
    } catch (error) {
      res.send(error.message)
    }
  }
}

export default new Users()
