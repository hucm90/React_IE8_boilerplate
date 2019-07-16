import React from 'react';
import style from './LayoutLogin.scss';

export class LayoutLogin extends React.Component {

    render() {
        return (
            <div className={style.LayoutLogin}>
                {this.props.children}
            </div>
        );
    }
}
