import React from 'react';
import style from './LayoutMain.scss';

export class LayoutMain extends React.Component {

    render() {
        return (
            <div className={style.LayoutMain}>
                {this.props.children}
            </div>
        );
    }
}
