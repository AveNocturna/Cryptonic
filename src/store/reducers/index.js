import filterReducer from './filterReducer'
import coinReducer from './coinsReduces'
import { combineReducers } from 'redux'

const reducers = combineReducers({ filter: filterReducer, coins: coinReducer });
export default reducers;