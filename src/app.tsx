import React from 'react';
import { Router } from '@reach/router';
import PageHome from './Pages/Home';
import PageNews from './Pages/News';
import PageContent from './Pages/Content';
import AppContext from './Contexts/appcontext';
import { BASE_URL, SENTRY_DSN } from 'Config';
import Request from './Lib/Request';
import * as Sentry from '@sentry/browser';
import Browser from 'Lib/Browser';

interface UserInfo {
    userName: string;
    age: number;
}

export default class App extends React.Component {

    state = {
        userInfo: { userName: 'menghao', age: 0 },
    };

    constructor(props: {}) {
        super(props);
        this.setUserInfo = this.setUserInfo.bind(this);
    }

    setUserInfo(userInfo: UserInfo) {
        this.setState({ userInfo });
    }

    render() {
        return (
            <AppContext.Provider value={{ ...this.state.userInfo, setUserInfo: this.setUserInfo }}>

                <Router>
                    <PageHome path="/" />
                    <PageNews path="news" />
                    <PageContent path="news/:id" />
                </Router>

            </AppContext.Provider>
        );
    }
}

function Init() {
    // init request
    Request.defaults.baseURL = BASE_URL.B2C;

    // init error reporting
    if (!(Browser.name === 'Internet Explorer' && Browser.version === '8.0')) Sentry.init({ dsn: SENTRY_DSN });
}

Init();
