export const pullRequest = () => {
    return (distapch) => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => {
                return response.json()
            })
            .then(res => {
                distapch({type: 'PULL_REQUEST', body: res})
                console.log('done')
            })
    }
}