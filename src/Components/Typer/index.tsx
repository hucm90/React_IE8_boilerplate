import React from "react";
import Sleep from '../../Lib/Sleep';

enum speed {
    'fast' = 1,
    'normal' = 2,
    'slow' = 3,
}


const waitSymbles = [
    ',', '.', '，', '。'
];


interface TyperProps {
    speed: 'fast' | 'normal' | 'slow';
    text: string;
    children?: (text: string) => any;
}

export default class Typer extends React.PureComponent<TyperProps> {

    static defaultProps = {
        speed: "normal"
    };

    state = {
        text: ""
    };

    componentDidMount(): void {
        this.typeText(this.props.text);
    }

    componentWillReceiveProps(nextProps: Readonly<TyperProps>, nextContext: any): void {
        this.typeText(this.props.text);
    }

    async typeText(input: string) {

        for (let i = 0; i < input.length; i++) {
            const text = input.substr(0, i + 1);
            const lastText = input[i];

            this.setState({ text });

            const delay = (waitSymbles.includes(lastText) ? speed['fast'] * 5 : speed['fast']) * 50;
            await Sleep(delay);
        }
    }

    render() {
        const text = this.state.text + "|";
        // console.log(text);
        return this.props.children ? this.props.children(text) : text;
    }
}

// class Light extends React.PureComponent {
//
//     state = {
//         show: true,
//     };
//
//     render() {
//         return <>|</>;
//     }
// }
