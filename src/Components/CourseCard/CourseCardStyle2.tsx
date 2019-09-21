import React from 'react';
import { ICourseCard } from '.';
import bgImg from './img/background.jpg';
import Style from './CourseCard.module.scss';
import Button from 'Components/Button';
import { dateFormat } from 'Lib/Format';

interface IProps {
    course: ICourseCard;
    courseType: number;
}

export default ({ course, courseType = 1 }: IProps) => {
    return (
        <div className={Style.CourseBlock}>
            <div className={Style.image}>
                <img src={course.picUrl || bgImg} alt={course.courseName} />
            </div>
            {courseType === 2 && <FaceCourseComponent course={course} />}
            {courseType === 3 && <LiveCourseComponent course={course} />}
            {courseType === 4 && <TrainCourseComponent course={course} />}
        </div>
    );
};

const FaceCourseComponent = ({ course }: {course: ICourseCard}) => {
    return (
        <div className={Style.courseInfo}>
            <h2 className={Style.courseName}>{course.courseName}</h2>
            <p className={Style.intro}>
                {course.faceBeginTime && course.faceEndTime && <span>时间：{dateFormat(course.faceBeginTime, 'yyyy-MM-dd')}~{dateFormat(course.faceEndTime, 'MM-dd')}</span>}
                {course.faceSurplusNumber && <span>名额仅剩 {course.faceSurplusNumber} 人</span>}
                {course.address && <span>地点: {course.address}</span>}
                <span>[查看地图]</span>
            </p>
            {course.note && <p className={Style.description}>{course.note}</p>}
            {course.teacher && <p className={Style.teacher}>讲师：{course.teacher}</p>}
            <p className={Style.price}><em>￥0.01</em><del>原价￥99.00</del></p>
            <div className={Style.buttons}>
                <Button type="white">查看课程</Button>
                <Button type="orange">报名</Button>
            </div>
        </div>
    );
};

const LiveCourseComponent = ({ course }: {course: ICourseCard}) => {
    return (
        <div className={Style.courseInfo}>
            <h2 className={Style.courseName}>[已结束] {course.courseName}</h2>
            <p className={Style.intro}><span>时间：2019.08.01~08.31</span> <span>名额仅剩100人</span> <span>地点: 大连东北财经大学</span> <span>[查看地图]</span> </p>
            <p className={Style.description}>本实验室结合商贸型业务特点，设计了采购、销售各环节的典型业务为了兼顾业务全面性，还包括了企业的日常业务比如计提工资，报销等；与现行的会计淮则、税法紧密配合，特别是结合税收新政策，选择和设计了相关的业务；原始凭证...</p>
            <p className={Style.teacher}>讲师：玛丽</p>
            <p className={Style.price}><em>￥0.01</em><del>原价￥99.00</del></p>
            <div className={Style.buttons}>
                <Button type="orange">查看课程</Button>
            </div>
        </div>
    );
};

const TrainCourseComponent = ({ course }: {course: ICourseCard}) => {
    return (
        <div className={Style.courseInfo}>
            <h2 className={Style.courseName}>商业实验室</h2>
            <p className={Style.intro}><span>时间：2019.08.01~08.31</span> <span>名额仅剩100人</span> <span>地点: 大连东北财经大学</span></p>
            <p className={Style.description}>本实验室结合商贸型业务特点，设计了采购、销售各环节的典型业务为了兼顾业务全面性，还包括了企业的日常业务比如计提工资，报销等；与现行的会计淮则、税法紧密配合，特别是结合税收新政策，选择和设计了相关的业务；原始凭证...</p>
            <p className={Style.price}><em>￥0.01</em><del>原价￥99.00</del></p>
            <div className={Style.buttons}>
                <Button type="orange">查看课程</Button>
            </div>
        </div>
    );
};
