import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import Request from 'Lib/Request';
import { BASE_URL } from 'Config';
import "Components/SCSS/main.scss";
import { LayoutMain } from "Components/Layouts";
import { Page404, PageDemo, PageNews, PageHome } from "./Pages";



// export default function App() {
//
//     useEffect(() => {
//         Request.defaults.baseURL = BASE_URL.B2C;
//     }, []);
//
//     return (
//         <LayoutMain>
//             <Router>
//                 <PageHome path="/" />
//                 <PageNews path="/news" />
//                 <PageDemo path="/demo/:component" />
//                 <Page404 default />
//             </Router>
//         </LayoutMain>
//     );
// }

export default class App extends React.Component {

    componentWillMount() {
        // init request
        Request.defaults.baseURL = BASE_URL.B2C;

        // init error reporting
        // if (!(Browser.name === 'Internet Explorer' && Browser.version === '8.0')) Sentry.init({ dsn: SENTRY_DSN });
    }

    render() {
        return (
            <LayoutMain>
                <Router>
                    <PageHome path="/" />
                    <PageNews path="/news" />
                    <PageDemo path="/demo/:component" />
                    <Page404 default />
                </Router>
            </LayoutMain>
        );
    }
}
