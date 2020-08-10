import React, {Component} from 'react';
import {Link} from 'react-router-dom';

let toDivide = function(n) {
	var int = String(Math.trunc(n));
	if(int.length <= 3) return int;
	var space = 0;
	var number = '';

	for(var i = int.length - 1; i >= 0; i--) {
		if(space === 3) {
			number = '.' + number;
			space = 0;
		}
		number = int.charAt(i) + number;
		space++;
	}

	return number;
}


class CountryCard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.country.name,
            population: toDivide(this.props.country.population),
            region: this.props.country.region,
            capital: this.props.country.capital,
            flag: this.props.country.flag,
        }
    }

    render() {
        const {name, population, region, capital, flag} = this.state

        return(
            <div className="col-sm-3 mb-5"  id={name}>
                <div className="card">
                    <Link to={'/' + name}>
                        <img className="card-img-top" alt="flag" src={flag}/>
                    </Link>
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text"><b>Population:</b> {population}</p>
                        <p className="card-text"><b>Region:</b> {region}</p>
                        <p className="card-text"><b>Capital:</b> {capital}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountryCard;