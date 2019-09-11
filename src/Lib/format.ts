
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

export const readableCurrency = () => {

};

export const date2ISO8601 = (dateString: string) => {
    let date = dateString.split('.')[0];
    return date.replace(' ', 'T') + '+08:00';
};

export const dateFormat = (timestamp: number, format: string) => {
    return "123123-123-123";
    // return DateTime.fromSeconds(timestamp).toFormat(format);
};

export const date2Timestamp = (dateString: string) => {
    const dateString2 = date2ISO8601(dateString);
    return "123123-123-123";
    // return DateTime.fromISO(dateString2).toSeconds();
};
