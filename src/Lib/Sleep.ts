
export default function Sleep(delay: number) {

    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
