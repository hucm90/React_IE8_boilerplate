/**
 * test Promise, async, for...of
 * @param time
 */

function delay(time: number) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

async function testAsync() {
    for (let i of [1, 2, 3]) {
        await delay(1000);
        console.log(i);
    }
}

const promise = testAsync();

