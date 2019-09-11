import React from 'react';
import Slider from "react-slick";
import { Link } from '@reach/router';

import Style from './carouselTeacher.module.scss';

import Avatar from 'Components/Avatar';

import { ITeacher } from 'Service/B2C/apis';

const PrevArrow = (props: any) => {
    return (
        <div className={Style.prevArrow} onClick={props.onClick}></div>
    );
};

const NextArrow = (props: any) => {
    return (
        <div className={Style.nextArrow} onClick={props.onClick}></div>
    );
};

const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    draggable: false,
    cssEase: 'linear',
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

interface ICarouselTeacherProps {
    teacherList: Array<ITeacher>;
}

const CarouselTeacher = (props: ICarouselTeacherProps) => {
    return (
        <Slider {...settings}>
            {props.teacherList.map(teacher => <Link key={teacher.title} to={`/Teacher/${teacher.teacherId}`}><div className={Style.TeacherItem}><TeacherCard teacher={teacher} /></div></Link>)}
        </Slider>
    );
};

const TeacherCard = ({ teacher }: {teacher: ITeacher}) => {
    return (
        <div className={Style.Teacher}>
            <div className={Style.avatar}><Avatar teacher={teacher} showIntro={true} /></div>
            <h1 className={Style.name}>{teacher.teacherName}</h1>
            <p className={Style.company}>{teacher.shortWord}</p>
            <p className={Style.title}>{teacher.title}</p>
        </div>
    );
};

export default CarouselTeacher;
