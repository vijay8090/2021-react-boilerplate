import { combineReducers } from 'redux'

import counterReducer from './counter-reducer';
import PropTypes from "prop-types";

const rootReducer = combineReducers({
    counter: counterReducer,
})

rootReducer.propTypes = {
    counter: PropTypes.object
};

export default rootReducer;
