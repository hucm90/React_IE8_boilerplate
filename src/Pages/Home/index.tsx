import React, { Component } from 'react';
import { Link } from '@reach/router';
import CourseCard, { ICourseCard } from 'Components/CourseCard';
import CourseLink from 'Components/CourseLink';
import * as Debug from 'Lib/Debug';

import style from './Home.scss';
import { getCarouselList, getPlateCourseList } from "Service/B2C/apis";

interface CarouselItem {
    address: string;
    pic: string;
    showType: string;
    seq: number | null;
    vid: string;
}

interface HomeState {
    visible: boolean;
    carouselList: Array<CarouselItem>;
    courseList: Array<ICourseCard>;
}

class PageHome extends Component<any, HomeState> {

    constructor(props: any) {
        super(props);
        this.state = {
            visible: true,
            carouselList: [],
            courseList: [],
        };
    }

    componentWillMount() {

        getCarouselList()
            .then(res => this.setState({ carouselList: res }))
            .catch(() => Debug.error("数据请求失败"));

        getPlateCourseList(7, 5)
            .then(res => this.setState({ courseList: res }))
            .catch(() => Debug.error("数据请求失败1"));
    }

    render() {

        return (
            <div className="Home-CourseCard-wrap">

                <div>
                    <h1>Links</h1>

                    <Link to="/demo/tab">Demos</Link> |
                    <Link to="/news">News</Link>
                </div>

                {this.state.courseList.map((course, index) => (
                    <div key={index} className={style['Home-CourseCard-item']}>
                        <CourseLink courseId={course.courseId} modality={course.modality || 1}>
                            <CourseCard courseType={1} course={course} />
                        </CourseLink>
                    </div>
                ))}
            </div>
        );
    }
}

export default PageHome;
