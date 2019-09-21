import Request from 'Lib/Request';
import { BASE_URL } from "Config";

interface ICourseInfo {
    courseId: number;
    courseName: string;
    note: string;
}

export function getCourseInfo(courseId: number) {
    return Request(BASE_URL.B2C).get<ICourseInfo>(`getCourseInfo?courseId=${courseId}`);
}
