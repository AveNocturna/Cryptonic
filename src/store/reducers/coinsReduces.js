const coinsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GETCOINS':
            return action.payload;
        default:
            return state;
    }
}
export default coinsReducer;