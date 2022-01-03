import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import CampusForm from './campus-form'
import {getCampuses} from '../reducers/campuses'

class Campuses extends Component {
  constructor() {
    super()
    this.state = {
      formOpen: false
    }
    this.openAddCampusForm = this.openAddCampusForm.bind(this)
    this.closeAddCampusForm = this.closeAddCampusForm.bind(this)
  }

	componentDidMount() {
		this.props.fetchCampuses()
	}

  openAddCampusForm() {
    this.setState({
      formOpen: true
    })
  }

  closeAddCampusForm() {
    this.setState({
      formOpen: false
    })
  }

	render() {
		const {campuses} = this.props
    const {formOpen} = this.state
    const {openAddCampusForm, closeAddCampusForm} = this

		return (
      <div className="campus-list">
        <div className="list-header">
          <h3>Campuses:</h3>
          <button onClick={openAddCampusForm}>Add Campus</button>
        </div>
        {formOpen && <CampusForm closeForm={closeAddCampusForm} />}
        <ul>
          {campuses && campuses.map(campus => (
            <li key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <h4>{campus.name}</h4>
                <img src={campus.imageURL} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({campuses}) => ({campuses})
const mapDispatchToProps = (dispatch) => ({fetchCampuses: () => dispatch(getCampuses())})

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)
