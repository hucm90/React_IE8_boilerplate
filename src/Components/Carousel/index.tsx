import React from 'react';
import style from './Carousel.scss';
import 'slick-carousel/slick/slick.css';

import Slider from "react-slick";


interface CarouselItem {
    address: string;
    pic: string;
    showType: string;
    seq: number|null;
    vid: string;
}

interface CarouselProps {
    list: Array<CarouselItem>;
}

const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    // fade: true,
    cssEase: 'linear',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: style['Carousel'],
    dotsClass: style['Carousel-dots'],
    customPaging: () => (<span className={style['Carousel-dot']}></span>)
};

const Carousel = (props: CarouselProps) => {
    return (
        <Slider {...settings}>
            {props.list.map(item => {
                return item.address ? <a key={item.address} href={item.address}><img src={item.pic} alt="" /></a> : <div key={item.address}><img src={item.pic} alt="" /></div>;
            })}
        </Slider>
    );
};

export default Carousel;
