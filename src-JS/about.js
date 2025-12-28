/**
 * 
about.js
\TheSpadesSpiderX1v0.1\src-JS\about.js
 */

console.log("\TheSpadesSpiderX1v0.1\src-JS\about.js: Hi! 2")

let homePagePart = {
    "main": "/TheSpadesSpiderX1v0.1/src-HTML/mainAbout.html",
}

// htmlInject (htmlID, htmlCode)
htmlHandler(homePagePart["main"], "main")
console.log("main", homePagePart["main"])

// for (const key in homePagePart) {
//     console.log(key, homePagePart[key])
//     htmlHandler(homePagePart[key], key)
// }
