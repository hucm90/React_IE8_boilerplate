import * as React from 'react';

interface IProps{
    number: number;
}

class CardGrandson extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                CardGrandson {this.props.number}
            </div>
        );
    }
}

export default CardGrandson;