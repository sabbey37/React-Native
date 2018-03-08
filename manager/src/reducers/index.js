import { combineReducers } from 'redux';
import { AuthReducer } form './AuthReducer';

export default combineReducers ({
    auth: AuthReducer
});