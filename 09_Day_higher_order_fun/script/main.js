const numbers=[1,2,3,4,5,6]
const countrie=['Afghanistan','Åland Islands']
const names= ["ajship","Bncm","crwyao","DOHS","eee","FTH"]

//using foreach
countries.forEach(country=>console.log(country))
names.forEach(names=>console.log(names))
numbers.forEach(number=>console.log(number))
//using map
const uppcaseConv=names.map(name=>name.toUpperCase())
console.log(uppcaseConv)

const nameLeanth=names.map(name=>name.length)
console.log(nameLeanth)
// square in the number
const numS=numbers.map(number=> number **2)
console.log(numS)
//filtureing countrys-land
const filteringC=countrie.filter(country=> country.includes('land'))
console.log(filteringC)
//filter startWith
const letetStart=names.filter(name=> name.startsWith("ee"))
console.log(letetStart)
//filter endsWith

const countryEnd=countrie.filter(country=> country.endsWith('an'))
console.log(countryEnd)
//name have 3 letters
const letetrFind=names.filter(name=> name.length==4)
console.log(letetrFind)
//reduce to sum all the numbers in the numbers array
const sum=numbers.reduce((acc,cur)=>acc+cur,0)
console.log(sum)
//reduce to concatenate all the countries 
const concatanatE=countrie.reduce((acc,cur)=>acc+cur)
console.log(concatanatE)
//some
//every
//find
//findIndex
//Sort countries by name, by capital, by population
//Find the 10 most spoken languages
//create a function which create the ten most populated countries