interface UserProps {
  id: string
  avatar: string
  bio: string
  favoriteFood: string
  location: string
  name: string
  themeColor: string
}

class Users {
  constructor(public users: UserProps) {
    this.users = users
  }
}

export default Users
