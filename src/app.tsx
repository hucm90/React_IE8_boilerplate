import React from 'react';
import { Router } from '@reach/router';
import PageHome from './Pages/Home';
import PageNews from './Pages/News';
import PageContent from './Pages/Content';
import AppContext from './Contexts/appcontext';
import { BASE_URL } from 'Config';
import Request from './Lib/Request';

export default class App extends React.Component {

    render() {
        return (
            <AppContext.Provider value={{ userName: 'menghao', age: 123 }}>
                <Router>
                    <PageHome path="/" />
                    <PageNews path="news" />
                    <PageContent path="news/:id" />
                </Router>
            </AppContext.Provider >
        );
    }
}

// init app default settings
function Init() {
    // init request
    Request.defaults.baseURL = BASE_URL.B2C;
}

Init();
