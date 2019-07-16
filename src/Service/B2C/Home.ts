import Request from 'Lib/Request';
import { BASE_URL } from 'Config';

// 首页名师
export interface IGoodTeacher {
    buyNum: number;
    note: string;
    photoUrl: string;
    shortWord: string;
    teacherId: string;
    teacherName: string;
    title: string;
}

// 首页板块
export interface IPlate {
    plateId: number;
    plateCode: string;
    plateName: string;
    plateCourseInfoV2s: null;
}

// 幻灯片
export interface ICarousel {
    pic: string;
    address: string;
    seq: number;
}

export function getKeywords() {
    return Request(BASE_URL.TK).get('getKeywords?num=3');
}

export function getPlateList() {
    return Request.get<IPlate[]>('getPlateList');
}

export function getCarouselList() {
    return Request(BASE_URL.Mock).get<ICarousel[]>('getCarouselList');
}

export function getGoodTeacherList() {
    return Request.get<IGoodTeacher[]>('getGoodTeacherList');
}
