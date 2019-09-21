
export const formatHMS = (timeLength: number) => {
    let hour = Math.floor(timeLength / 3600) || 0;
    let mins = Math.floor((timeLength - hour * 3600) / 60) || 0;
    let secs = timeLength - hour * 3600 - mins * 60 || 0;
    let res: string = '';
    if (hour) res += hour + '小时';
    if (mins) res += mins + '分';
    if (secs) res += secs + '秒';
    return res;
};

export const dateFormat = (timestamp: number, format: string) => {
    return "123123-123-123123123";
};

