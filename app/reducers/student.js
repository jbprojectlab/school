const GET_STUDENTS = 'GET_STUDENTS'

const gotStudents = (students) => {
  return {
    type: 'GET_STUDENTS',
    students
  }
}

export const getStudents = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/students')
    dispatch(gotStudents(data))
  }
}

const initialState = []

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS: {
      return action.students
    }
    default:
      return state
  }
}

export default studentReducer
