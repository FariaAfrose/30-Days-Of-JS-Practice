
//1. create an empty set
const a=[4,5,8,9]
const b=[3,4,4,5,7]
const emptySet=new Set()
console.log(emptySet)
// console.log(b)
const newSetB=new Set(b)
console.log(newSetB)

//2. Create a set containing 0 to 10 using loop
const createSet=new Set()
for(let i=0; i<=10;i++){
 createSet.add(i)}
console.log(createSet)

//3. Remove an element from a set
  createSet.delete(4)
  console.log(createSet)

//4. Clear a set
createSet.clear()
console.log(createSet)

//5. Create a set of 5 string elements from array
const creatingArray=["a","b","c","d","d","e","f"]
const creatingSet= new Set(creatingArray.slice(0,5))
console.log(creatingSet)

//6.empty Map (Map- built-in object)
const map=new Map()
console.log(map)

//7. Create a map of countries and number of characters of a country
countrys = ['Finland', 'Helsinki','Sweden', 'Stockholm' ,'Norway', 'Oslo']
//map(array method)
const countriesMap= new  Map(countrys.map(country=>[country,country.length]))
console.log(countriesMap)
//8.Exercises:Level 2
//Find a union b
const unionSet= new Set([...a,...b])
console.log(Array.from (unionSet))
//Find a intersection b
const intersectionSet=new Set(a.filter(a=> b.includes(a)))
console.log(Array.from (intersectionSet))
// Find a with b
const cmmonInAB=a.filter(a=> b.includes(a))
console.log(Array.from (cmmonInAB))
//How many languages are there in the countries object file.

function countLanguage(countries){
  const languageSet=new Set()

  countries.forEach(country => {
    country.languages.forEach(language=>{
    languageSet.add(language)
    })
  });
  return languageSet.size
}
const numOfLang=countLanguage(countries)
console.log(numOfLang)
// Use the countries data to find the 10 most spoken languages
function spokenLanguage(countries,count){
  const languageCount={}

  countries.forEach(country => {
    country.languages.forEach(langauge=>{
     languageCount[langauge]= (languageCount[langauge] || 0)+1
    })
  });
  const languageArray =Object.entries(languageCount).map(([langauge,count])=>({[langauge]:count}))
  const sortedLang=languageArray.sort((a,b)=>Object.values(b)[0]-Object.values(a)[0])
  return sortedLang.slice(0,count)
  }  
  console.log(spokenLanguage(countries,10))
  console.log(spokenLanguage(countries,3))
