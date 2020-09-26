import { combineReducers } from 'redux';
import { imagesReducer } from './imagesReducer';
import { imagesStatReducer } from './imagesStateReducer';

const rootReducer = combineReducers({ imagesReducer, imagesStatReducer });

export default rootReducer;
