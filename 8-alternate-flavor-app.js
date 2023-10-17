
const names = require('./3-names')

const sayHi = require('./4-utils')

const data = require('./6-alternate-flavor')

console.log(data);

console.log(names);

 sayHi('Test 1')
 
 sayHi("Sandesh 1")

 //sayHi(names.name1)
 sayHi(`test ${names.name2}`)

 sayHi(names.name2)
