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
  username: string
  email: string
  password: string
  gCode: string | null
  userfile: string
  appId: string
  name: string
  roleId: string
  notesId: string
  title: string
  slug: string
  body: string
  createdAt: Date
  createdBy: string | null
  updatedAt: Date
  updatedBy: string | null
}

type User = {
  [Key in
    | 'id'
    | 'username'
    | 'email'
    | 'password'
    | 'gCode'
    | 'roleId'
    | 'userfile'
    | 'createdAt'
    | 'createdBy'
    | 'updatedAt'
    | 'updatedBy']: MasterProps[Key]
}

type
