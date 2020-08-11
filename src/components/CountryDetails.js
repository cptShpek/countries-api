import React, {Component} from 'react';
//, Switch, Route
import {connect} from 'react-redux';
// Actions
import {getCountryDetails} from '../store/actions';
//Components
import DetailsCard from './cards/DetailsCard';

class CountryDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryDetails: ''
    }
  }

  componentDidMount() {
    this.props.getCountryDetails(this.props.match.params.name)
    setTimeout(() => this.setState({
      countryDetails: this.props.countryDetails
    }), 500)
  }

  getCountryFullName = (code) => {
    return this.props.countries.filter(elem => elem.alpha3Code === code)[0].name
  }

  render() {
    return(
      <div className="details-card">
        <button 
          onClick={() => {
            this.props.history.goBack()
            setTimeout(() => this.props.history.go(0), 500)
          }}
          className="btn btn-light btn-lg"
        >
          &#x2190; Back
        </button>
        {this.state.countryDetails ? 
        <DetailsCard history={this.props.history} getCountryFullName={this.getCountryFullName} country={this.state.countryDetails}/> 
        : 
        <p>Waiting for responce...</p>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    countryDetails: state.countryDetails[0],
    countries: state.countries
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getCountryDetails: (name) => dispatch(getCountryDetails(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails)