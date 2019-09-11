import React from 'react';
import { Link } from '@reach/router';

interface ICourseLink {
    modality: number;
    courseId: number;
    children: React.ReactElement;
}

const CourseLink = (props: ICourseLink) => {
    let link: string;
    switch (props.modality) {
        case 1:
            link = `/course/video/${props.courseId}`;
            break;
        case 2:
            link = `/course/face/${props.courseId}`;
            break;
        case 3:
            link = `/course/live/${props.courseId}`;
            break;
        case 4:
            link = `/course/train/${props.courseId}`;
            break;
        default:
            link = `/course/video/${props.courseId}`;
            break;
    }
    return <Link to={link}>{props.children}</Link>;
};

export default CourseLink;
