import React, {Component} from 'react';
//, Switch, Route
import {connect} from 'react-redux';

class CountryDetails extends Component {

  render() {
    const country = this.props.country[0];
    console.log(country)

    return(
      <div>
        <h2>sdasd</h2>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    country: state.countries.filter(country =>  country.name === ownProps.match.params.name)
  }
}

export default connect(mapStateToProps)(CountryDetails)