import React from 'react';
import { ITeacher } from 'Service/B2C/apis';

import Style from './avatar.module.scss';

import defaultAvatar from "./avatar.png";

const Avatar = ({ teacher, showIntro = false }: {teacher: ITeacher; showIntro?: boolean}) => {
    return (
        <div className={Style.avatar}>
            <img src={teacher.photoUrl || defaultAvatar} alt={teacher.teacherName} />
            {showIntro && <p className={Style.intro}><span><em>{teacher.note}</em></span></p>}
        </div>
    );
};

export default Avatar;
