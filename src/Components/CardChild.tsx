import * as React from 'react';

import CardGrandson from './CardGrandson';

interface IProps{
    number: number;
}

class CardChild extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                CardChild {this.props.number}
                <CardGrandson number={this.props.number} />
            </div>
        );
    }
}

export default CardChild;