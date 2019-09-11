import 'core-js/es/function';
import 'core-js/es/object';
import 'core-js/es/array';
import 'core-js/es/string';
import 'core-js/modules/es.promise';
import './Lib/polyfills/head';

import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(
    <App />,
    document.getElementById('app')
);
