/**
 * 
about.js
\TheSpadesSpiderX1\src-JS\about.js
 */

console.log("\TheSpadesSpiderX1\src-JS\about.js: Hi! 2")

let homePagePart = {
    "main": "/TheSpadesSpiderX1/src-HTML/mainAbout.html",
}

// htmlInject (htmlID, htmlCode)
htmlHandler(homePagePart["main"], "main")
console.log("main", homePagePart["main"])

// for (const key in homePagePart) {
//     console.log(key, homePagePart[key])
//     htmlHandler(homePagePart[key], key)
// }
