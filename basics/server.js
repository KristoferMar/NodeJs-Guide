// This could basically become an application this simple.
const chalk = require("chalk"); //How to import npm package

console.log('testing this.');

const colours = ['red', 'green', 'blue'];

colours.forEach((colour) => {
    console.log(chalk[colour]("Hello, World!"));
});