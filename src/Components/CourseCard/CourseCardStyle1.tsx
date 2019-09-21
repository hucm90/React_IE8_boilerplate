import React from 'react';
// import { VideoCourse, FaceCourse, LiveCourse, TrainCourse } from '.';
import { ICourseCard } from '.';

import { formatHMS } from 'Lib/Format';

import bgImg from './img/background.jpg';
import Style from './CourseCard.module.scss';

interface IProps {
    course: ICourseCard;
    courseType: number;
}

export default ({ course, courseType = 1 }: IProps) => {

    let videoCourse = (
        <p className={Style.info}>
            {course.timeLength && <span>{formatHMS(course.timeLength)}</span>}
            {course.buyNum && <span>{course.buyNum} 人已学</span>}
        </p>
    );
    let faceCourse = (
        <p className={Style.info}>
            {course.timeLength && <span>{formatHMS(course.timeLength)}</span>}
            {course.buyNum && <span>{course.buyNum} 人已学</span>}
        </p>
    );
    let liveCourse = (
        <p className={Style.info}>
            {course.timeLength && <span>{formatHMS(course.timeLength)}</span>}
            {course.buyNum && <span>{course.buyNum} 人已学</span>}
        </p>
    );
    let trainCourse = (
        <p className={Style.info}>
            {course.timeLength && <span>{formatHMS(course.timeLength)}</span>}
            {course.buyNum && <span>{course.buyNum} 人已学</span>}
        </p>
    );

    return (
        <div className={Style.CourseCard}>
            <div className={Style.image}>
                <img src={course.picUrl || bgImg} alt={course.courseName} />
            </div>
            <h1 className={Style.title} title={course.courseName}>{course.courseName}</h1>
            {courseType === 1 && videoCourse}
            {courseType === 2 && faceCourse}
            {courseType === 3 && liveCourse}
            {courseType === 4 && trainCourse}
            <p className={Style.price}>
                <em>{'￥' + course.offPrice}</em>
                {course.price && (course.price !== course.offPrice) ? <del>原价￥{course.price}</del> : null}
            </p>
        </div>
    );
};
