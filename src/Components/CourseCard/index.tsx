import React from 'react';
import CourseCardStyle1 from './CourseCardStyle1';
import CourseCardStyle2 from './CourseCardStyle2';

export interface ICourseCard {
    courseId: number;
    courseName: string;
    picUrl: string;
    price: number;
    offPrice: number;
    isbuy: boolean;
    teacher: string;
    buyNum?: number;
    isHot?: boolean;
    isNew?: boolean;
    modality?: number;
    timeLength?: number;
    days?: number;
    faceBeginTime?: number;
    faceEndTime?: number;
    faceSurplusNumber?: number;
    address?: string;
    faceId?: number;
    mapAddress?: string;
    signupBeginTime?: number;
    signupEndTime?: number;
    signupState?: boolean;
    state?: number;
    note?: string;
    liveBeginTime?: number;
    liveEndTime?: number;
    liveId?: number;
    surplusNumber?: number;
    trainId?: number;
}

// export interface VideoCourse extends Course {
//   buyNum?: number
//   isHot?: boolean
//   isNew?: boolean
//   modality?: number
//   timeLength?: number
//   days?: number
// }

// export interface FaceCourse extends Course {
//   faceBeginTime?: number
//   faceEndTime?: number
//   faceSurplusNumber?: number
//   address?: string
//   faceId?: number
//   mapAddress?: string
//   signupBeginTime?: number
//   signupEndTime?: number
//   signupState?: boolean
//   state?: number
//   note?: string
// }

// export interface LiveCourse extends Course {
//   liveBeginTime?: number
//   liveEndTime?: number
//   liveId?: number
//   signupBeginTime?: number
//   signupEndTime?: number
//   signupState?: boolean
//   state?: number
//   surplusNumber?: number
//   note?: string
// }

// export interface TrainCourse extends Course {
//   isHot?: boolean
//   isNew?: boolean
//   trainId?: 2
//   days?: number
// }

interface ICourseCardProps {
    course: ICourseCard;
    courseType: number;
    // 1 视频课
    // 2 面授课
    // 3 直播课
    // 4 实训课
    type?: string;
}



const CourseCard = ({ course, courseType = 1, type = 'default' }: ICourseCardProps) => {
    switch (type) {
        case 'line':
            return <CourseCardStyle2 courseType={courseType} course={course} />;

        case 'default':
        default:
            return <CourseCardStyle1 courseType={courseType} course={course} />;
    }
};

export default CourseCard;
