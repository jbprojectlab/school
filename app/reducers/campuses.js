import axios from 'axios'
import history from '../history'

const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'

const gotCampuses = (campuses) => {
  return {
    type: 'GET_CAMPUSES',
    campuses
  }
}

const gotCampus = (campus) => {
  return {
    type: 'GET_CAMPUS',
    campus
  }
}

const addedCampus = (campus) => {
  return {
    type: 'ADD_CAMPUS',
    campus
  }
}

export const getCampuses = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/campuses')
    dispatch(gotCampuses(data))
  }
}

export const getCampus = (id) => {
  return async (dispatch) => {
    const {data} = await axios.get(`/api/campuses/${id}`)
    dispatch(gotCampus(data))
  }
}

export const addCampus = (campusData) => {
  return async (dispatch) => {
    const {data} = await axios.post('/api/campuses', campusData)
    dispatch(addedCampus(data))
    history.push('/campuses')
  }
}

export const campusSelector = (campuses, id) => {
  return campuses.find(campus => campus.id === id)
}

const initialState = []

const campusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSES: {
      return action.campuses
    }
    case GET_CAMPUS: {
      if(state.some(campus => campus.id === action.campus.id)) {
        return state.map(campus => {
          if(campus.id === action.campus.id) return action.campus
          else return campus
        })
      } else {
        return [...state, action.campus]
      }
    }
    case ADD_CAMPUS: {
      return [...state, action.campus]
    }
    default:
      return state
  }
}

export default campusReducer
