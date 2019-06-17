import * as React from "react";
import {Router} from "@reach/router";
import PageHome from "./Pages/home";
import PageNews from "./Pages/news";
import PageContent from "./Pages/content";

import AppContext from "./Contexts/appcontext";

export default class App extends React.Component{

    render() {
        return (
            <AppContext.Provider value={{userName: "menghao", age:123}}>
                <Router>
                    <PageHome path={"/"}/>
                    <PageNews path={"news"} />
                    <PageContent path={"news/:id"} />
                </Router>
            </AppContext.Provider >
        )
    }
}