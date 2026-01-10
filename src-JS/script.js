/**
 * 
script.js
/TheSpadesSpiderX1/src-JS/script.js
 */

console.log("JavaScript: /TheSpadesSpiderX1/src-JS/script.js: Hi! 2")

// let pagePart = {
//     "headerID": "/TheSpadesSpiderX1/src-HTML/header.html",
//     "navID": "/TheSpadesSpiderX1/src-HTML/nav.html",
// }

// const htmlInject = (htmlID, htmlCode) => document.getElementById(htmlID).innerHTML = htmlCode;

// const htmlLoader = (htmlFileSrc) => fetch(htmlFileSrc)
//     // .then(
//     //     response => response.ok ? ((function () { return response.text() })())
//     //         : ((function () { throw new Error('Network response was not ok ' + response.statusText) })())
//     // )
//     .then(response => {
//         if (response.ok) return response.text(); // Get the response as plain text
//         else throw new Error('Network response was not ok ' + response.statusText);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });

// const htmlHandler = (htmlFileSrc, htmlID) => htmlLoader(htmlFileSrc)
//     .then(htmlCode => htmlInject(htmlID, htmlCode))
//     .catch(error => console.error('There was a problem:', error))

// for (const key in pagePart) {
//     console.log(key, pagePart[key])
//     htmlHandler(pagePart[key], key)
// }

pagePartHeaderHandler()
pagePartMainHandler()

/**
 * 

const createParas2 = () => {
    // const start = Date.now();
    const main = document.querySelector('main');
    const fragment = document.createDocumentFragment();
    let i = 0;
    while (i < 10000) {
        const p = document.createElement('p');
        p.textContent = `My value is ${i}`;
        fragment.append(p);
        i++;
    }

    main.append(fragment);

    // const duration = Date.now() - start;
    // console.log(`duration: ${duration}`);
}

 */
/**
 * 

let path = window.location.pathname;
let pathAr = path.split("/")
let page = pathAr[pathAr.length-1]
console.log(path);
console.log(pathAr);
console.log(page); 
pathAr.pop()
let path2 = pathAr.join('/')
console.log(path2)

*/

/**
 * 

let page = path.split("/").pop();
path = path.split('/')
page= "xx: "+path.pop()
console.log (path, page)

*/
