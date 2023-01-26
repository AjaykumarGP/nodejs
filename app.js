// npm - global command come with code
// npm --version

//local dependency - use it only in this particular project
// npm i <package name> or npm install <package name>

// global dependency - use it any project
// npm install -g <package name> or 
// For mac --> sudo npm install -g <package name>

//package.json - manifest file(store important information about project/ package)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)