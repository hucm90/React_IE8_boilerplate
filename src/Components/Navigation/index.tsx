import React, { Component } from 'react';
import { Link } from '@reach/router';

import Style from './Navigation.module.scss';
import * as Debug from 'Lib/Debug';
import { getKeywords } from 'Service/B2C/apis';
import SearchForm from './SearchForm/SearchForm';

interface Keyword {
    keyword: string;
}

interface INavigationstate {
    keywords: Array<Keyword>;
    keywordsShow: boolean;
    searchKey: string;
}

interface INavigationProps {
    current?: string;
}

class Navigation extends Component<INavigationProps, INavigationstate> {

    constructor(props: INavigationProps) {
        super(props);
        this.state = {
            keywords: [],
            searchKey: "",
            keywordsShow: true,
        };
    }

    componentWillMount() {
        getKeywords(3)
            .then(res => { this.setState({ keywords: res.keywords }) })
            .catch(() => Debug.error("数据请求失败"));
    }

    renderKeywords() {
        if (!this.state.keywordsShow || this.state.searchKey !== '') return null;
        return (
            <div className={Style.KeyWords}>
                {this.state.keywords.map(item => {
                    return (
                        <span onClick={() => {
                            this.setState({ searchKey: item.keyword });
                        }} key={item.keyword}>{item.keyword}</span>
                    );
                })}
            </div>
        );
    }

    render() {

        return (
            <div className={Style.Navigation}>
                <div className="container">
                    <ul className={Style.Links}>
                        <li className={`${Style.LinksItem} ${this.props.current === 'Home' ? Style.LinksItem_current : ''}`}><Link to="/">首页</Link></li>
                        <li className={`${Style.LinksItem} ${this.props.current === 'Course' ? Style.LinksItem_current : ''}`}><Link to="/Course">课程中心</Link></li>
                        <li className={`${Style.LinksItem} ${this.props.current === '1' ? Style.LinksItem_current : ''}`}><a href="/">会计职称</a></li>
                        <li className={`${Style.LinksItem} ${this.props.current === '2' ? Style.LinksItem_current : ''}`}><a href="/">学习专区</a></li>
                        <li className={`${Style.LinksItem} ${this.props.current === '3' ? Style.LinksItem_current : ''}`}><a href="/">会计继续教育</a></li>
                    </ul>
                    <div className={Style.RightWrap}>
                        <SearchForm keywords={this.state.keywords} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
