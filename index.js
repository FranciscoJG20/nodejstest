var name = require("./module1");
// you must import module in order to access it!
var _ = require("underscore");
// for dependencies, you only need to indicate name, not file path
var colors = require("colors");
console.log(name.a.inverse + " " + name.b.green);
// console.log("hi, francisco!");
// var a = 1;
// console.log(a);

// npm = node package manager
// npm allows you to maintain dependencies
// you can install a dependency by running the following command:
// npm install <dependency name>
// when you install a dependency, you will also create a file called package.json
// which will store all dependencies so that you can simply run "npm install" and it will intall all dependencies in the application
