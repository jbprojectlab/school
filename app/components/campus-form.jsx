import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addCampus} from '../reducers/campuses'

class CampusForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      imageURL: '',
      address: '',
      description: ''
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
    const {name, imageURL, address, description} = evt.target
    this.props.createCampus({
      name: name.value,
      imageURL: imageURL.value,
      address: address.value,
      description: description.value
    })
    this.props.closeForm()
  }

	render() {
    const {handleChange, handleSubmit} = this
    const {name, imageURL, address, description} = this.state

		return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={name} onChange={handleChange} required />
          <label>Photo (imageURL)</label>
          <input name="imageURL" value={imageURL} onChange={handleChange} required />
          <label>Address</label>
          <input name="address" value={address} onChange={handleChange} required />
          <label>Description</label>
          <input name="description" value={description} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCampus: (campusData) => dispatch(addCampus(campusData))
})

export default connect(null, mapDispatchToProps)(CampusForm)

