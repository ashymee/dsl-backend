interface Student {
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

class Students {
  constructor(public student: Student) {
    this.student = student
  }
}

export default Students
