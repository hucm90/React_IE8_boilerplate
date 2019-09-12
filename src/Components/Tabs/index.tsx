import React, { Component } from 'react';
import Style from './Tabs.module.scss';

interface ITabPaneProps {
    tabKey: string;
    icon?: string;
    tab: string | React.ReactNode;
    children?: React.ReactChild;
    className?: string | undefined;
}

const TabPane = (props: ITabPaneProps) => {
    return <div className={props.className}>{props.children}</div>;
};

interface ITabsProps{
    currentKey: string;
    children: Array<React.ReactElement<ITabPaneProps> | null>;
}

interface ITabsState{
    currentKey: string;
}

class Tabs extends Component<ITabsProps, ITabsState> {

    static TabPane = TabPane;

    constructor(props: ITabsProps) {
        super(props);
        this.state = {
            currentKey: this.props.currentKey
        };
    }

    componentWillMount() {
    }

    render() {
        return (
            <div>
                <ul className={Style.Tabs}>
                    {this.props.children.map((children, index) => {

                        if (children === null) return null;

                        return (
                            <li
                                className={`${Style.Tab} ${children.props.icon && Style[children.props.icon]} ${(children.props.tabKey === this.state.currentKey) && Style.current}`}
                                onClick={() => this.setState({ currentKey: children.props.tabKey })}
                                key={index}>
                                {children.props.tab}
                            </li>
                        );
                    })}
                </ul>
                {this.props.children.map(child => {
                    if (!child) return null;
                    return child.props.tabKey === this.state.currentKey ? <div className={Style.show}>{child}</div> : <div className={Style.hide}>{child}</div>;
                })}
            </div>
        );
    }

}


export default Tabs;
