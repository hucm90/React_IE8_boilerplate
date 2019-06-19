import 'promise-polyfill/src/polyfill';

import * as React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';

import PageHome from './Pages/home';
import PageNews from './Pages/news';

interface IState {
    test: number;
}

class App extends React.Component<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            test: 1
        };
    }


    render() {
        return (
            <Router>
                <PageHome path="/" />
                <PageNews path="news" />
            </Router>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);
