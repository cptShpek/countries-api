import React, {Component} from 'react';
//, Switch, Route
import {connect} from 'react-redux';

// Components
import MainCard from './cards/MainCard';

class CountriesList extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        setTimeout(() => this.mapCountriesToState(), 500)
    }
    
    mapCountriesToState = () => {
        let arr = []
        // this.props.countries.length
        for (let i = 0; i < 100; i++) {
          arr.push(this.props.countries[i])
        }
        this.setState({
          countries: arr
        })
    }

    getCounriesCards = () => {
        return this.state.countries.map(country => {
          return <MainCard country={country} key={country.name}/>
        })
    }

    render() {
        const {countries} = this.state

        return(
            <div className="card-deck mr-5 ml-5">
                {countries[0] ? (this.getCounriesCards()) : (<p>Waiting for responce...</p>) }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}
  
export default connect(mapStateToProps)(CountriesList);