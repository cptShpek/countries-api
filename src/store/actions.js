export const pullRequest = () => {
    return (distapch) => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => {
                return response.json()
            })
            .then(res => {
                distapch({type: 'PULL_REQUEST', body: res})
            })
            .catch(err => console.log('ERROR: ' + err))
    }
}

export const getCountryDetails = (name) => {
    return(dispatch) => {
        fetch('https://restcountries.eu/rest/v2/name/' + name)
            .then(res => {
                return res.json()
            })
            .then(res => {
                dispatch({type: 'GET_COUNTRY_DETAILS', body: res})
            })
            .catch(err => console.log('ERROR: ' + err))
    }
}