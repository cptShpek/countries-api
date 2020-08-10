let initState = {
    countries: [],
    currentCountry: {}
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case 'PULL_REQUEST': {
            return {
                ...state,
                countries: action.body
            }
        }
        default:
            return state
    }
}

export default reducer