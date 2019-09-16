import React from 'react';
import Typer from 'Components/Typer';

export default class DemoTyper extends React.PureComponent {

    state = {
        text: "蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，" +
            "常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，" +
            "可以通过抽象得到一些稳定且高复用性的内容。随着商业化的趋势，" +
            "越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，" +
            "我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，" +
            "逐步打磨出一个服务于企业级产品的设计体系 Ant Design。" +
            "基于『确定』和『自然』的设计价值观，通过模块化的解决方案，降低冗余的生产成本，" +
            "让设计者专注于更好的用户体验。"
    };

    onChange = (e: any) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <div>
                <h1>DemoTyper (模拟打字)</h1>
                <div><textarea onChange={this.onChange} /></div>
                <Typer text={this.state.text} key={this.state.text} />
            </div>
        );
    }
}
