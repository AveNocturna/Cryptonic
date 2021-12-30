const getCoins = (value) => {
    return {
        type: 'GETCOINS',
        payload: value
    }
}

export default getCoins;