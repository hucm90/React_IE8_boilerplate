import "object-defineproperty-ie8";
import 'core-js/es/function';
import 'core-js/es/object';
import 'core-js/es/array';
import 'core-js/es/string';
import 'core-js/modules/es.promise';
import '../Lib/polyfills/head';
// import '../Lib/polyfills/createClass';

import React from 'react';
import { render } from 'react-dom';

export default function run(App: any, props: any = {}) {
    return render(React.createElement(App, props), document.getElementById('app'));
}

