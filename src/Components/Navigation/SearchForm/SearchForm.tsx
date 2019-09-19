import React from "react";
import { RouteComponentProps, Link } from '@reach/router';
import Style from "../Navigation.module.scss";

interface SearchInput extends RouteComponentProps{
    keywords: any[];
}

interface SearchState{
    keywordsShow: boolean;
    searchKey: string;
}

class SearchForm extends React.PureComponent<SearchInput, SearchState> {

    state = {
        keywordsShow: true,
        searchKey: ""
    };

    renderKeywords = () => {
        if (!this.state.keywordsShow || this.state.searchKey !== '') return "";
        return (
            <div className={Style.KeyWords}>
                {this.props.keywords && this.props.keywords.map((item) => { return <Link to={`/search/${item.keyword}`} key={item.keyword}><span>{item.keyword}</span></Link> })}
            </div>
        );
    };

    doSearch() {
        // this.props.history.push(`/search/${this.state.searchKey}`);
    }

    render() {
        return (
            <div className={Style.Search}>
                <div className={Style.Input}>
                    <input
                        type="text"
                        value={this.state.searchKey}
                        onChange={(e) => this.setState({ searchKey: e.target.value })}
                        onFocus={() => this.setState({ keywordsShow: false })}
                        onBlur={() => this.state.searchKey || this.setState({ keywordsShow: true })}
                    />
                    {this.renderKeywords()}
                </div>
                <button className={Style.SearchBtn} onClick={() => this.doSearch()}></button>
            </div>
        );
    }
}

export default SearchForm;
