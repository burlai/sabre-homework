import form from './form';
import { sales } from 'reducers/sales';
import { loader } from 'reducers/loader';

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
    form,
    routing,
    sales,
    loader
});

export default rootReducer;