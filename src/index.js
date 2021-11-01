import React from 'react';
import { render } from 'react-dom';

import './index.css';
import Root from './Root';
import { createStore } from '../src/store';

const store = createStore();

const toBeRendered = <Root store={store} />;

render(toBeRendered, document.getElementById('root'));