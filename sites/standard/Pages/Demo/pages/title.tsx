import React from 'react';
import Sleep from 'Lib/Sleep';
import Title from "Components/Title";
import Typer from "Components/Typer";

export default class DemoTitle extends React.PureComponent {

    state = {
        text: "哈哈^_^"
    };

    async componentDidMount() {
        const delay = 4000;

        do {
            await Sleep(delay);
            this.setState({ text: "你好!" });

            await Sleep(delay);
            this.setState({ text: "..." });

            await Sleep(delay);
            this.setState({ text: "来自真实世界的朋友!" });

            await Sleep(delay);
            this.setState({ text: "今天天气怎么样?" });

            await Sleep(delay);
            this.setState({ text: "想必心情一定很愉悦吧!" });
        } while (true);
    }

    render() {
        return (
            <div>
                <h1>DemoTitle (网页标题)</h1>
                <Title>{this.state.text}</Title>
                <p>看看你的标题栏</p>
            </div>
        );
    }
}
