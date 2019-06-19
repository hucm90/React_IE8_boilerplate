import * as React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

// import { PageNews } from './news'

import Card from '../Components/Card';

interface IState {
    CardList: Array<number>;
}

export default class PageHome extends React.Component<RouteComponentProps, IState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            CardList: [1, 2, 3, 4, 5]
        };
    }

    deleteCard(index: number) {
        let list = this.state.CardList;
        list.splice(index, 1);
        this.setState({
            CardList: list
        });
        console.log('deleteCard: ' + index);
    }

    render() {
        return (
            <div>
                <h1>PageHome</h1>
                {/* <PageNews /> */}
                {
                    this.state.CardList.map((element, index) => {
                        return (
                            <Card number={element} key={element} onClick={() => { this.deleteCard(index) }} />
                        );
                    })
                }
                <Link to="news">Read News</Link>
            </div>
        );
    }
}