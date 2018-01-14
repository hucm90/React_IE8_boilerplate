export let GetCourseCateList = async (isApp = 1) => {
    let response = await fetch(`http://api.dufe.online/getCourseCateList?isApp=${isApp}`);
    return await response.json();
}

export let GetPlateList = async () => {
    let response = await fetch("http://api.dufe.online/getPlateList");
    return await response.json();
}

export let GetPlateCourses = async (plateId)=>{
    let response = await fetch(`http://api.dufe.online/getPlateCourseList?plateId=${plateId}&page=0&size=10`);
    let data = await response.json();
    return data.courses;
}