
// Display the countries array as a table
const countryArray=['Asabeneh', 'Brook', 'David', 'John']
console.table(countryArray)
// Display the countries object as a table
countryObj={
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  
}
console.table(countryObj)

// Use console.group() to group logs
console.group("Country array")
console.log(countryArray)
console.groupEnd()
console.group("Country object")
console.log(countryObj)
console.groupEnd()
// 10 > 2 * 10 use console.assert()
console.assert(10>28*10 ,'Is this true!')
// Write a warning message using console.warn()
console.warn("First warning")
// Write an error message using console.error()
console.error("Error found..")
// Check the speed difference among the following loops: while, for, for of, forEach
let i=0
while(i<countryArray.length){
    console.count('While loop')
i++
}
 for(let i=0 ; i<countryArray.length ;i++){
console.count("For loop")
 }
 for(const item of countryArray){
console.count("for of")
 }
countryArray.forEach(item => {
    console.count("forEach")

 });