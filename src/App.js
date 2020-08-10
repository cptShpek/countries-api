import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//, Switch, Route
import {connect} from 'react-redux';

// Actions
import {pullRequest} from './store/actions';

//Components
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';

class App extends Component {

  componentDidMount() {
    this.props.pullRequest()
  } 

  render() {

    return (
      <Router >
          <Navbar />
          
          <Route path="/" exact component={CountriesList} />
          <Route path="/:name" component={CountryDetails} />
      </Router >
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    pullRequest: () => dispatch(pullRequest())
  }
}

export default connect(null, mapDispatchToProps)(App);