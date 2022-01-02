import axios from 'axios'

const GET_CAMPUSES = 'GET_CAMPUSES'

const gotCampuses = (campuses) => {
  return {
    type: 'GET_CAMPUSES',
    campuses
  }
}

export const getCampuses = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/campuses')
    console.log('got campuses in store:  ', data)
    dispatch(gotCampuses(data))
  }
}

const initialState = []

const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSES: {
      return action.campuses
    }
    default:
      return state
  }
}

export default campusReducer
