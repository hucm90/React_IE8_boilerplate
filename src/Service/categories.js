export let GetCourseCateList = async (isApp = 1) => {
    let response = await fetch(`http://api.dufe.online/getCourseCateList?isApp=${isApp}`);
    return await response.json();
}