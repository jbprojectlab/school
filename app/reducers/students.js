import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'

const gotStudents = (students) => {
  return {
    type: 'GET_STUDENTS',
    students
  }
}

const gotStudent = (student) => {
  return {
    type: 'GET_STUDENT',
    student
  }
}

const addedStudent = (student) => {
  return {
    type: 'ADD_STUDENT',
    student
  }
}

export const getStudents = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/students')
    dispatch(gotStudents(data))
  }
}

export const getStudent = (id) => {
  return async (dispatch) => {
    const {data} = await axios.get(`/api/students/${id}`)
    dispatch(gotStudent(data))
  }
}

export const addStudent = (studentData) => {
  return async (dispatch) => {
    const {data} = await axios.post('/api/students', studentData)
    dispatch(addedStudent(data))
  }
}

export const studentSelector = (students, id) => {
  return students.find(student => student.id === id)
}

const initialState = []

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS: {
      return action.students
    }
    case GET_STUDENT: {
      if(state.some(student => student.id === action.student.id)) {
        return state.map(student => {
          if(student.id === action.student.id) return action.student
          else return student
        })
      } else {
        return [...state, action.student]
      }
    }
    case ADD_STUDENT: {
      return [...state, action.student]
    }
    default:
      return state
  }
}

export default studentReducer
