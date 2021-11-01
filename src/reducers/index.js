import { sales } from './sales';
import { loader } from './loader';

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
    routing,
    sales,
    loader
});

export default rootReducer;