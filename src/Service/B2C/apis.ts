import Request from 'Lib/Request';
import qs from 'qs';
import { AxiosResponse } from 'axios';


type ListData<T> = {
    [P in keyof T]: T[P];
};

interface PageCount {
    page: number;
    total: number;
}

type Pagination<T> = ListData<T> & PageCount;

interface IgetKeywords {
    keywords: Array<{keyword: string}>;
}
export const getKeywords = (num: number) => {
    return Request.get<IgetKeywords>('/getKeywords', { params: { num: num }})
        .then(res => res.data);
};

export const getCatePath = (courseId: number) => {
    return Request.get('/getCatePath', { params: { courseId: courseId }})
        .then(res => JSON.parse(JSON.stringify(res.data.cates).replace(/cateName/g, 'title')));
};

interface IgetCourseList {
    address: string;
    pic: string;
    seq: number | null;
    showType: string;
    vid: string;
}
export const getCarouselList = (type: number = 1) => {
    return Request.get<Array<IgetCourseList>>('/getCarouselList', { params: { type: type }})
        .then(res => res.data);
};



// interface IgetPlateCourseList {
//   plantName: string
//   page: number
//   totla: number
//   courses: Array<{
//     buyNum: number
//     courseScore: number|null
//     courseType: number|null
//     id: number
//     isShow: string|null
//     modality: string|null
//     name: string
//     offPrice: string
//     picUrl: string
//     price: string
//     timeLength: string
//     type: string
//   }>
// }
export const getPlateCourseList = (plateId: number, size: number = 10, page: number = 0) => {
    return Request.get('/getPlateCourseListV2', { params: { plateId: plateId, page: page, size: size }})
        .then((res) => {
            return JSON.parse(
                JSON.stringify(res.data.courses)
                    .replace(/id/g, 'courseId')
                    .replace(/name/g, 'courseName')
            );
        });
};

export const getWxChatAppId = (type: number = 1) => {
    return Request.get('/wxChatLogin', { params: { type: type }})
        .then(res => res.data.appId);
};

export const getCourseList = (cateId: number) => {
    return Request.get('/getCourseList', { params: { cateId: cateId }})
        .then(res => res.data);
};

interface GetFaceCourse {
    address: string;
    buyNum: number;
    courseId: number;
    courseName: string;
    faceBeginTime: number;
    faceEndTime: number;
    faceId: number;
    faceSurplusNumber: number;
    isbuy: boolean;
    mapAddress: string;
    note: string;
    offPrice: number;
    picUrl: string;
    price: number;
    signupBeginTime: number;
    signupEndTime: number;
    signupState: boolean;
    state: number;
    teacher: string;
}

interface IgetLiveCourse {
    courseId: number;
    courseName: string;
    isbuy: boolean;
    liveBeginTime: number;
    liveEndTime: number;
    liveId: number;
    note: string;
    offPrice: number;
    picUrl: string;
    price: number;
    signupBeginTime: number;
    signupEndTime: number;
    signupState: boolean;
    state: number;
    surplusNumber: number;
    teacher: string;
}

export const getCourseCateList = () => {
    return Request.get('/getCourseCateList')
        .then(res => res.data[0]);
};

interface IgetCourseInfo {
    adVideoAddress: string;
    buyNum: number;
    courseId: number;
    courseName: string;
    days: number;
    freeTimeLength: string;
    isEnable: string;
    isPublish: string;
    modality: string;
    note: string;
    offPrice: string;
    outline: string;
    picUrl: string;
    price: string;
    profit: string;
    targetGroup: string;
    timeLength: string;
    type: null;
    videoAddress: string;
}

// 获取课程详情
export const getCourseInfo = (courseId: number) => {
    return Request.get<IgetCourseInfo>('/getCourseInfo', { params: { courseId: courseId }})
        .then(res => res.data);
};

export const getCourseBuyState = (courseId: number) => {
    return Request.post('/getCourseBuyState', qs.stringify({ courseIds: courseId }))
        .then(res => {
            res.data[courseId].isCompanyFree = parseInt(res.data[courseId].isCompanyFree) === 1;
            res.data[courseId].isbuy = parseInt(res.data[courseId].isbuy) === 1;
            res.data[courseId].progress = parseInt(res.data[courseId].progress);
            return res.data;
        });
};

// 获取课程章节
export const getCourseChapterList = (courseId: number) => {
    return Request.get('/getCourseChapterList', { params: { courseId: courseId }})
        .then(res => res.data);
};

export const getDatas = (courseId: number, type: number = 1) => {
    return Request.get('/getDatas', { params: { id: courseId, type: type }})
        .then(res => res.data);
};

export const getStudentLastPlayPosInfo = (courseId: number) => {
    return Request.get('/getStudentLastPlayPosInfo', { params: { courseId: courseId }})
        .then(res => res.data);
};

export interface ITeacher {
    buyNum: number;
    note: string;
    photoUrl: string;
    shortWord: string;
    teacherId: number;
    teacherName: string;
    title: string;
}

export const getCourseTeacherList = (courseId: number) => {
    return Request.get('/getCourseTeacherList', { params: { courseId: courseId }})
        .then(res => res.data.teachers.map((teacher: any) => {
            teacher.teacherId = parseInt(teacher.teacherId);
            return teacher;
        }));
};

export const getStudentCourseChapterList = (courseId: number) => {
    return Request.get('/getStudentCourseChapterList', { params: { courseId: courseId }})
        .then(res => res.data);
};

export const getGoodTeacherList = () => {
    return Request.get('/getGoodTeacherList')
        .then(res => res.data);
};

export const getTeacherInfo = (teacherId: number) => {
    return Request.get('/getTeacherInfo', { params: { teacherId: teacherId }})
        .then(res => res.data);
};

export const getTeacherCourseList = (teacherId: number) => {
    return Request.get('/getTeacherCourseList', { params: { teacherId: teacherId }})
        .then(res => res.data.courses);
};

export const getCmsData = (code: string|number) => {
    interface IgetCmsData {
        childs: Array<IgetCmsData>;
        cmsId: number;
        code: string;
        name: string;
        note: string;
        parentId: number;
        seq: number;
        title: string;
    }
    return Request.get<IgetCmsData>('/getCmsData', { params: { code: code }})
        .then(res => res.data);
};

// post

export const login = (account: string, password: string, appType: number = 0) => {
    return Request.post('/login', qs.stringify({ account: account, password: password, appType: appType }))
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('companyId', res.data.companyId);
            localStorage.setItem('companyLevel', res.data.companyLevel);
            localStorage.setItem('isReferee', res.data.isReferee);
            localStorage.setItem('account', res.data.userInfo.account);
            localStorage.setItem('nick', res.data.userInfo.nick);
            localStorage.setItem('photoUrl', res.data.userInfo.photoUrl);
            return res.data;
        });
};

export const logOut = () => {
    localStorage.clear();
    window.location.reload();
};

export const getMobileCode = (mobile: string, picCode: string) => {
    return Request.post('/getMobileCode', qs.stringify({ mobile: mobile, picCode: picCode }))
        .then(res => res.data);
};

// 题库

export const getExamPaper = (tacticId: string) => {
    return Request.get('/TKGL/getExamPaperb2capi.action', { params: { "tactic_id": tacticId }})
        .then(res => res.data);
};


// 登陆注册相关

// 获取微信AppId
interface IwxChatLogin {
    appId: string;
}

export const wxChatLogin = (type: number = 1) => {
    return Request.get<IwxChatLogin>('/wxChatLogin', { params: { type: type }})
        .then(res => res.data);
};

export const getPicCode = () => {
    return '/getPicCode';
};

// 密码重置
export const resetPassword = (mobile: string, password: string, mobileCode: string) => {
    return Request.post('/resetPassword', qs.stringify({ mobile: mobile, password: password, mobileCode: mobileCode }))
        .then(res => res.data);
};

// 注册
export const register = (nick: string, mobile: string, referralCode: string, password: string, mobileCode: string) => {
    return Request.post('/register', qs.stringify({
        nick: nick,
        mobile: mobile,
        referralCode: referralCode,
        password: password,
        mobileCode: mobileCode
    }));
};
