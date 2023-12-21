console.log(countries)
alert ('Open the browser console whenever you work on JavaScript')
alert ('Open the  console and if the countrics has been loaded')

//using split
let js= 'JAVASCRIPT'
const charInIs=js.split('')
console.log(charInIs)
//accessing array items using index 
 const items=['one','two','three','four']
 let firstItem= items[0]
 console.log(firstItem)
 let lastItem= items.length -1
 lastItem=items[lastItem]
 console.log(lastItem)

 //replacing element - splice
 const items2=['A','B','C','D']

items2.splice(2,0,'new Item1' ,'new Item2')
console.log(items2)

 //concatenating array
 const firstList =[1,2,3]
 const secondList=[4,5,6]
 const thirdList=firstList.concat(secondList)
 console.log(thirdList)
//Remove the middle IT company or companies from the array
const givenArray=["A","B","C","D","E","F"]
const middle= Math.floor(givenArray.length/2)
if(givenArray.length %2==1){
    givenArray.splice(middle,1)
}else{
    givenArray.splice(middle -1,2)

}
console.log(givenArray)
//lvl-3,1
const ages =[19,22,19,24,20,25,26,24,25,24]
//short the array
const sorted=ages.slice().sort((a,b)=>a-b);
console.log("sorted"+ sorted)

//midddle age find
const middleIndex= Math.floor(sorted.length/2)
const middleAge=sorted.length %2==0? (sorted[middleIndex -1]+sorted[middleIndex])/2 :sorted[middleIndex]
console.log("middleAge " +middleAge)
//avarage age find

let sumAge=0;
ages.forEach(age=>{
    sumAge += age
})
const avarageAge= sumAge/ ages.length
console.log("avarageAge "+ avarageAge)
//range of the ages
const minAge=sorted[0]
const maxAge=sorted[sorted.length-1]
const range= maxAge-minAge
console.log("range "+range)

//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the
const comparingMinAvg=Math.abs(minAge - avarageAge)
const comparingMaxAvg=Math.abs(maxAge - avarageAge)
console.log( comparingMinAvg,comparingMaxAvg)
//slicing countrys

const sclicingOut=countries.slice(0,10)
console.log(sclicingOut)
//lvl-3,2
//finding middle countries
const countriesMiddleIndex=Math.floor(countries.length/2)
const middleCountries= countries.length %2==0? (countries[countriesMiddleIndex-1]+countries[countriesMiddleIndex])/2:countries[countriesMiddleIndex]
console.log(middleCountries)
//lvl-3,3
const firstHalf= countries.slice(0,countriesMiddleIndex+1 )
const secondtHalf= countries.slice(countriesMiddleIndex+1  )
console.log(firstHalf)
console.log(secondtHalf)
