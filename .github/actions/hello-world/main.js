const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thridGreeting = core.getInput("third-greeting");

console.log("Hello ${firstGreeting}");
console.log("Hello ${secondGreeting}");
if(thridGreeting){
    console.log("Hello ${thirdGreeting}");
}