import React from 'react';
import { Link } from 'react-router'
import {GetCourseCateList} from "../../Service/categories";
import {} from "./index.scss";

class Block1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }

    async componentWillMount () {
        let data = await GetCourseCateList();
        this.setState({"list": data});
    }

    render () {
        return (
            <div class="Index-block">
                <div class="container">
                    <div class="Index-category">
                        {this.state.list.map((el)=>(
                            <Link class="Index-category-item" to={"/Course?catId="+el.cateId}>
                                <img src={el.pcPicUrl} />
                                <h4>{el.cateName}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

let PageIndex = () => (
    <div className="PageIndex">
        <Block1></Block1>
        <img src={require('./category1.png')} alt=""/>
    </div>
)

export default PageIndex;