import React from 'react';
import { Link } from 'react-router'
import {GetCourseCateList, GetPlateList, GetPlateCourses, GetCarouselList} from "../../Service/categories";
import {CourseCard, Carousel, CarouselItem} from "../../Components"
import {} from "./index.scss";

let CateLink = (props) => (
    <Link class="Index-category-item" to={"/Course?catId="+props.data.cateId}>
        <img src={props.data.pcPicUrl} />
        <h4>{props.data.cateName}</h4>
    </Link>
)

class Block0 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }

    async componentWillMount () {
        let data = await GetCarouselList();
        this.setState({"list": data});
    }

    render () {
        return (
            <Carousel>
                {this.state.list.map((el)=><CarouselItem link={el.address} image={el.pic}/>)}
            </Carousel>
        )
    }
}

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
            <div className="Index-block">
                <div className="container">
                    <div className="Index-category">
                        {this.state.list.map((el)=>(
                            <CateLink data={el}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

class Plate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : []
        }
    }

    async componentWillMount () {
        let data = await GetPlateCourses(this.props.data.plateId);
        this.setState({"list": data});
    }

    render () {
        return (
            <div className="container">
                <h1 className="_Heading1"><Link className="Index-more" to="/Course">更多&gt;&gt;</Link>{this.props.data.plateName}</h1>
                <div className="CourseCard-list5">
                    {this.state.list.map((item)=>(
                        <CourseCard data={item}/>
                    ))}
                </div>
            </div>
        )
    }
}


class Block2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            plates : []
        }
    }

    async componentWillMount () {
        let data = await GetPlateList();
        this.setState({"plates": data});
    }

    render () {
        return (
            <div className="Index-block">
                {this.state.plates.map((plate)=>(
                    <Plate data={plate} />
                ))}
            </div>
        )
    }
}

let PageIndex = () => (
    <div className="PageIndex">
        <Block0/>
        <Block1/>
        <Block2/>
    </div>
)

export default PageIndex;