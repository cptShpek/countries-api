let initState = {
    countries: [],
    countryDetails: {}
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case 'PULL_REQUEST': {
            return {
                ...state,
                countries: action.body
            }
        }

        case 'GET_COUNTRY_DETAILS': {
            return {
                ...state,
                countryDetails: action.body
            }
        }

        default:
            return state
    }
}

export default reducer