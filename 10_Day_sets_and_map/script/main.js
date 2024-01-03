//const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']
// create an empty set
const a=[4,5,8,9]
const b=[3,4,5,7]

const emptySet=new Set()
console.log(emptySet)
// console.log(b)
// const newSetB=new Set(b)

// console.log(newSetB)
// Create a set containing 0 to 10 using loop
const createSet=new Set()

for(let i=0; i<=10;i++){
    createSet.add(i)
}
console.log(createSet)

// Remove an element from a set
  createSet.delete(4)
  console.log(createSet)
// Clear a set
createSet.clear()
console.log(createSet)
// Create a set of 5 string elements from array
const creatingArray=["a","b","c","d","d","e","f"]
const creatingSet= new Set(creatingArray.slice(0,5))
console.log(creatingSet)
// Create a map of countries and number of characters of a country

//Exercises:Level 2
// Find a union b
// Find a intersection b
// Find a with b

//How many languages are there in the countries object file.

// Use the countries data to find the 10 most spoken languages:
