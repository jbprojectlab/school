import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import StudentForm from './student-form'
import {getStudents, removeStudent} from '../reducers/students'

class Students extends Component {
  constructor() {
    super()
    this.state = {
      formOpen: false
    }
    this.openAddStudentForm = this.openAddStudentForm.bind(this)
    this.closeAddStudentForm = this.closeAddStudentForm.bind(this)
  }

	componentDidMount() {
		this.props.fetchStudents()
	}

  openAddStudentForm() {
    this.setState({
      formOpen: true
    })
  }

  closeAddStudentForm() {
    this.setState({
      formOpen: false
    })
  }

	render() {
		const {students, deleteStudent} = this.props
    const {formOpen} = this.state
    const {openAddStudentForm, closeAddStudentForm} = this

		return (
      <div className="student-list">
        <div className="list-header">
          <h3>Students:</h3>
          <button onClick={openAddStudentForm}>Add Student</button>
        </div>
        {formOpen && <StudentForm closeForm={closeAddStudentForm} />}
        <ul>
          {students && students.map(student => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                <h4>{student.firstName + ' ' + student.lastName}</h4>
                <img src={student.imageURL} />
              </Link>
              <button onClick={() => deleteStudent(student.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({students}) => ({students})
const mapDispatchToProps = (dispatch) => ({
  fetchStudents: () => dispatch(getStudents()),
  deleteStudent: (id) => dispatch(removeStudent(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Students)
