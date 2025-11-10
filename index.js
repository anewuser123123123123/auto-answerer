import { JSDOM } from 'jsdom';
//import { writeFile, mkdir } from 'node:fs/promises';

//Настройки
let overallTimer = 70;
let randomDeviation = 5;

//Код
overallTimer -= randomDeviation * Math.random()

export const wait = (seconds) =>
    new Promise((resolve) => setTimeout(resolve, seconds * 1000));

let i = 0
async function fetchTextAndParseNextBodyPrefix(promise) {
    let html = await (await promise).text()

    i += 1
    //await writeFile(`${i}.html`, html)
    let dom = new JSDOM(html)
    let hiddenInputs = dom.window.document.querySelectorAll('input[type="hidden"]');
    const searchParams = new URLSearchParams();
    for (const prefixInput of Array.from(hiddenInputs).slice(0, 3)) {
        searchParams.append(prefixInput.name, prefixInput.value);
    }

    return searchParams.toString();
}

console.log("Отправляем ответы первой страницы опросника")
let bodyPrefix1 = await fetchTextAndParseNextBodyPrefix(fetch("https://forms.mkrf.ru/e/2579/xTPLeBU7/?ap_orgcode=380160343", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
    },
    "referrer": "https://forms.mkrf.ru/e/2579/xTPLeBU7/?ap_orgcode=380160343",
    "body": "d15bdd336439f85081f0b8eb3541fd40ab172efd=NnlueD7a20MeUTvM13XRACnw7krsP4YIn8uIz3a5agQtEgQXYBGq%2FStEwW%2F0RzgybezVPvOWb0ukDOFKJDS92B0WRlkqWx%2F%2FCNkwBPRBGoaaxW58u73m5hGvNDm7zcxEO3FA8rRggv%2Bw7p072muiE9OtHaVMywffuA0sNe%2F%2F7hI%3D&cfd6868a-b03d6cdb-9a438291-be8720b3-0dc81de4=start",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
}));
let delay1 =  overallTimer / 2
console.log(`Ждём ${delay1} секунд перед отправкой ответов следующей страницы`)
await wait(delay1)

let bodyPrefix2 = await fetchTextAndParseNextBodyPrefix(fetch("https://forms.mkrf.ru/e/2579/xTPLeBU7/?ap_orgcode=380160343", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
    },
    "referrer": "https://forms.mkrf.ru/e/2579/xTPLeBU7/?ap_orgcode=380160343",
    "body": bodyPrefix1+"&question%5B1689%5D%5Bvisible%5D=1&question%5B1689%5D%5Bvalue%5D%5B%5D=1705&question%5B1533%5D%5Bvisible%5D=1&question%5B1533%5D%5Bvalue%5D%5B%5D=1535&question%5B1543%5D%5Bvisible%5D=1&question%5B1543%5D%5Bvalue%5D%5B%5D=1544&question%5B1546%5D%5Bvisible%5D=1&question%5B1546%5D%5Bvalue%5D%5B%5D=1548&question%5B1554%5D%5Bvisible%5D=1&question%5B1554%5D%5Bvalue%5D%5B%5D=1555",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
}));

overallTimer -= delay1
let delay2 = overallTimer + Math.random() * 2
console.log(`Ждём ${delay2} секунд перед отправкой ответов следующей страницы`)
await wait(delay2)

await fetchTextAndParseNextBodyPrefix(fetch("https://forms.mkrf.ru/e/2579/xTPLeBU7/?ap_orgcode=380160343", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
    },
    "referrer": "https://forms.mkrf.ru/e/2579/xTPLeBU7/?ap_orgcode=380160343",
    "body": bodyPrefix2+"&question%5B1561%5D%5Bvisible%5D=1&question%5B1561%5D%5Bvalue%5D%5B1567%5D%5B%5D=1566&question%5B1561%5D%5Bvalue%5D%5B1568%5D%5B%5D=1566&question%5B1561%5D%5Bvalue%5D%5B1569%5D%5B%5D=1566&question%5B1561%5D%5Bvalue%5D%5B1570%5D%5B%5D=1566&question%5B1561%5D%5Bvalue%5D%5B1571%5D%5B%5D=1566&question%5B1561%5D%5Bvalue%5D%5B1572%5D%5B%5D=1566&question%5B1561%5D%5Bvalue%5D%5B1573%5D%5B%5D=1566&question%5B1561%5D%5Bvalue%5D%5B1574%5D%5B%5D=1566",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
}));

for (let j = 5; j > 0; --j) {
    console.log(`Готово, программа закроется через ${j}`)
    await wait(1)
}