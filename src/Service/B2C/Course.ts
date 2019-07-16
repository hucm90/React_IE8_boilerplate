import Request from 'Lib/Request';
import { HttpAuthError, HttpNetworkError, HttpError } from 'Lib/ErrorHandler';

interface ICourseInfo {
    courseId: number;
    courseName: string;
    note: string;
}

export function getCourseInfo(courseId: number) {
    return Request.get<ICourseInfo>(`getCourseInfo1?courseId=${courseId}`);
}
