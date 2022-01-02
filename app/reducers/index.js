import {combineReducers} from 'redux'
import campusReducer from './campus'
import studentReducer from './student'

const rootReducer = combineReducers({campuses: campusReducer, students: studentReducer})

// // This would produce the following state object
// {
//   campus: {
//     // ... campuses, and other state managed by the campusReducer ...
//   },
//   student: {
//     // ... students, and other state managed by the studentReducer
//   }
// }

export default rootReducer
