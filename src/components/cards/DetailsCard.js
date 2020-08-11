import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//Utils
import {toDivide} from '../../utils/index';


class DetailsCard extends Component{

    componentDidMount() {
        this.initReload()
    }

    getAllDetails = (detail) => {
        let allDetails = '';

        for (let el = 0; el < detail.length; el++) {
            if (el === 0) {
                allDetails += detail[el].name
            } else {
                allDetails += `, ${detail[el].name}`
            }
        }

        return allDetails
    }

    getBorderCountries = (borders) => {
        var btns = []

        for (let border = 0; border < borders.length; border++) {
            if (border % 4 === 0) {}
            btns.push(
                    <Link 
                    to={'/' + this.props.getCountryFullName(borders[border])}
                    className="btn btn-sm btn-light ml-2"
                    key={borders[border]} 
                    >
                    {borders[border]}
                    </Link>
            )
        }

        if (btns[0]) {
            return btns
        } else {
            return <p className="pt-3">There are no neighboring Countries</p>
        }
    }

    initReload = () => {
        let links = document.getElementsByTagName('a')
        for (let i = 1; i < links.length; i++){
            links[i].addEventListener('click', () => this.props.history.go(0))
        }
    }

    render(){
        const {name, flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = this.props.country;
        
        return(
            <div className="row mt-5">
                <div className="col-6 ">
                    <img className="details-flag border" src={flag} alt="Country Flag"/>
                </div>
                <div className="col-auto mt-4 ml-3">
                    <div className="row ml-1">
                        <h3 className="h2">{name}</h3>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-auto">
                            <p><b>Native Name: </b>{nativeName}</p>
                            <p><b>Population: </b>{toDivide(population)}</p>
                            <p><b>Region: </b>{region}</p>
                            <p><b>Sub Region: </b>{subregion}</p>
                            <p><b>Capital: </b>{capital}</p>
                        </div>
                        <div className="col-auto ml-5">
                            <p><b>Top Level Domain: </b>{topLevelDomain}</p>
                            <p><b>Currencies: </b>{this.getAllDetails(currencies)}</p>
                            <p><b>Languages: </b>{this.getAllDetails(languages)}</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <p className="pt-3"><b>Border Countries:</b></p>
                        </div>
                        <div className="col-auto">
                            <div className="row">
                            {this.getBorderCountries(borders)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsCard;