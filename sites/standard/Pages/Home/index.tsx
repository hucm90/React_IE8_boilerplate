import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import CourseCard, { ICourseCard } from 'Components/CourseCard';
import CourseLink from 'Components/CourseLink';
import Debug from 'Lib/Debug';
import useUserInfo from 'useHooks/useUserInfo';
import { getCarouselList, getPlateCourseList } from "Service/B2C/apis";
import Title from "Components/Title";
import useConfig from "useHooks/useConfig";

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


function PageHome(props: any) {

    let [courseList, setCourseList] = useState<ICourseCard[]>([]);
    let [carouselList, setCarouselList] = useState<CarouselItem[]>([]);

    let [userInfo, setUserInfo] = useUserInfo();
    let { name, Tip } = useConfig();

    useEffect(() => {
        getCarouselList()
            .then(res => setCarouselList(res))
            .catch(() => Debug.error("数据请求失败"));

        getPlateCourseList(7, 5)
            .then(res => setCourseList(res))
            .catch(() => Debug.error("数据请求失败1"));
    }, []);


    return (
        <div className="Home-CourseCard-wrap">
            <Title>{name} - 首页</Title>

            <p>UserName: {userInfo.userName}  <Login /></p>

            <p>AppName: {name}</p>

            {Tip && <Tip />}

            <div>
                <h1>Links</h1>

                <Link to="/demo/tab">Demos</Link> |
                <Link to="/news">News</Link>
            </div>

            <div>
                <div className="row">
                    {courseList.map((course, index) => (
                        <div className="c1-3" key={index} >
                            <CourseLink courseId={course.courseId} modality={course.modality || 1}>
                                <CourseCard courseType={1} course={course} />
                            </CourseLink>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}


function Login() {

    let [userInfo, setUserInfo] = useUserInfo();

    const onClick = () => {
        setUserInfo({ ...userInfo, userName: Math.random().toString() });
    };

    return <button onClick={onClick}>Login</button>;
}

export default PageHome;
