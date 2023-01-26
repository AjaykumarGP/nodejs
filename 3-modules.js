// Commonjs --> Every file is a module by default
// Modules --> Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const {items, singlePerson} = require('./6-alternative-flavor')


// sayHi("Ajay")
// sayHi(names.john)
// console.log(items, singlePerson)

require('./7-mind-grenade')