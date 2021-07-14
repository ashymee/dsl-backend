type Student = {
  id: string
  firstName: string
  lastName: string
  classEnrolled: string
  age: number
  phone: string
  subject: string
  year: number
  semester: number
  status: string
}

type MasterProps = {
  id: string
  appID: string
  userID: string
  roleID: string
  noteID: string
  platformID: string
  username: string
  email: string
  password: string
  gCode: string | null
  userfile: string
  name: string
  title: string
  slug: string
  body: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
}

type Platform = {
  [Key in 'id' | 'name']: MasterProps[Key]
}

type App = {
  [Key in 'id' | 'name' | 'platformID']: MasterProps[Key]
}

type User = {
  [Key in
    | 'id'
    | 'username'
    | 'email'
    | 'password'
    | 'gCode'
    | 'roleID'
    | 'noteID'
    | 'userfile'
    | 'createdAt'
    | 'createdBy'
    | 'updatedAt'
    | 'updatedBy']: MasterProps[Key]
}

type Note = {
  [Key in
    | 'id'
    | 'userID'
    | 'title'
    | 'slug'
    | 'body'
    | 'createdAt'
    | 'createdBy'
    | 'updatedAt'
    | 'updatedBy']: MasterProps[Key]
}
