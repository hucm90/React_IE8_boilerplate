import "Components/SCSS/main.scss";
import React from 'react';
import { Router } from '@reach/router';
import { Request } from 'Lib';
import { BASE_URL } from 'Config';
import { LayoutMain } from "Components/Layouts";
import { Page404, PageDemo, PageHome, PageNews } from "./Pages";
import { ConfigContext, AppConfigType } from 'Context/ConfigContext';

Request.defaults.baseURL = BASE_URL.B2C;

export default function App(Config: AppConfigType) {

    return (
        <ConfigContext.Provider value={Config}>
            <LayoutMain>
                <Router>
                    <PageHome path="/" />
                    <PageNews path="/news" />
                    <PageDemo path="/demo/*" />
                    <Page404 default />
                </Router>
            </LayoutMain>
        </ConfigContext.Provider>
    );
}
