import React from 'react';
import url from './img/Blocks-1s-200px.gif';
import style from './spinner.scss';

interface SpinnerProps {
    size: number;
}

export default class Spinner extends React.PureComponent<SpinnerProps> {

    render() {
        const frame = {
            fontSize: this.props.size,
        };

        return (
            <div className={style.spinner} style={frame}>
                <img src={url} />
            </div>
        );
    }
}
