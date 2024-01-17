// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text='He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const extractNumber=text.match(/\d+/g).map(Number)
const total=(extractNumber[0]*12)+extractNumber[1]+(extractNumber[2]*12)
console.log("Total",total)
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const position=['-1','2','-4','-3','1','0','4','8']
const sortingPosition=position.map(Number).sort((a,b)=>a-b)
const distance=sortingPosition[sortingPosition.length -1] -sortingPosition[0]
console.log("Sorting Position",sortingPosition)
console.log("Distance",distance)
// Write a pattern which identify if a string is a valid JavaScript variable
function findValid(variable_name){
    const pattern =/^[a-zA-Z_$][a-zA-Z0-9_$]*$/
    return pattern.test(variable_name)
}
console.log(findValid('firstName'))
console.log(findValid('first-name'))
console.log(findValid('firstname'))
console.log(findValid('lirstName'))
// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
function valid(variable_name){
    const isValid =/^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
return isValid.test(variable_name)
}
console.log(valid('validVariable'))
console.log(valid('123invalid'))

// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

function Clean(text){
const cleanText=text.replace (/[^\w\s]/gi,'').toLowerCase()
const words=cleanText.split(/\s+/)
const wordCount ={}
words.forEach(word=>{
    wordCount[word]=(wordCount[word] || 0)+1
})
const sorting=Object.keys(wordCount).sort((a,b)=>wordCount[b]-wordCount[a])
const frequent=sorting.slice(0,3)
return frequent
}


const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(Clean(sentence))