import * as React from 'react';

import CardChild from './CardChild';

interface IProps{
    number: number;
    onClick: () => void;
}

class Card extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Card {this.props.number}
                <button onClick={() => { this.props.onClick() }}>删除 Card</button>
                <CardChild number={this.props.number} />
            </div>
        );
    }
}

export default Card;