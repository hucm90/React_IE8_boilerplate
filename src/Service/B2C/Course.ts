import Request from 'Lib/Request';

interface ICourseInfo {
    courseId: number;
    courseName: string;
    note: string;
}

export function getCourseInfo(courseId: number) {
    return Request.get<ICourseInfo>(`getCourseInfo?courseId=${courseId}`);
}