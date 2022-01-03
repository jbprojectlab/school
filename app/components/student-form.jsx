import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addStudent} from '../reducers/students'

class StudentForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageURL: '',
      gpa: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

	handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
	}

  handleSubmit(evt) {
    evt.preventDefault()
    const {firstName, lastName, email, imageURL, gpa} = evt.target
    this.props.createStudent({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      imageURL: imageURL.value,
      gpa: Number(gpa.value)
    })
    this.props.closeForm()
  }

	render() {
    const {handleChange, handleSubmit} = this
    const {firstName, lastName, email, imageURL, gpa} = this.state

		return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input name="firstName" value={firstName} onChange={handleChange} required />
          <label>Last Name</label>
          <input name="lastName" value={lastName} onChange={handleChange} required />
          <label>Email</label>
          <input name="email" value={email} onChange={handleChange} required />
          <label>Photo (imageURL)</label>
          <input name="imageURL" value={imageURL} onChange={handleChange} required />
          <label>GPA</label>
          <input name="gpa" value={gpa} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  createStudent: (studentData) => dispatch(addStudent(studentData))
})

export default connect(null, mapDispatchToProps)(StudentForm)

