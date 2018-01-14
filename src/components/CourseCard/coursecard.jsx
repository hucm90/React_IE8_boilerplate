import React from 'react';
import { Link } from 'react-router'
import Image from "../Image"
import Money from "../Money"
import {} from "./coursecard.scss"

let CourseCard = (props) => (
    <div className="CourseCard">
        <Link to={"/CourseDetail?courseId="+props.data.courseId}>
            <div className="CourseCard-img">
                <Image src={props.data.picUrl}/>
            </div>
            <h1 className="CourseCard-title">{props.data.courseName}</h1>
            <p className="CourseCard-info">{props.data.timeLength}&nbsp;&nbsp;|&nbsp;&nbsp;{props.data.buyNum}人已学</p>
            <p className="CourseCard-price"><Money value={props.data.offPrice}/></p>
        </Link>
    </div>
)

export default CourseCard