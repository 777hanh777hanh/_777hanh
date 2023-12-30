import { combineReducers } from 'redux';
import searchParamsReducer from './searchParams';

const rootReducer = combineReducers({ searchParamsReducer });

export default rootReducer;
