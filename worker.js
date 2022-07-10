let AAA = "";

async function fuckMyLife() {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    while (true) {
        AAA += "A";
        postMessage(AAA);
        await delay(50);
    }
}

fuckMyLife();