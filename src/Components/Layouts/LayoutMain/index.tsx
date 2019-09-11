import React from 'react';
import style from './LayoutMain.scss';
import Header from "Components/Header";
import Navigation from "Components/Navigation";
import Footer from "Components/Footer";
import { RouteComponentProps } from '@reach/router';

export class LayoutMain extends React.Component<RouteComponentProps> {

    render() {
        return (
            <div className={style.LayoutMain}>
                <Header />
                <Navigation current="Home" />
                <div className="container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
