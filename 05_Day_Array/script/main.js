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

const age =[19,22,19,24,2,20,25,26,24,25,24]
//short the array
const sorted=age.slice().sort((a,b)=>a-b);
console.log(sorted)

//midddle age find
const middleIndex= Math.floor(sorted.length/2)
const middleAge=sorted.length %2==0? (sorted[middleIndex -1]+sorted[middleIndex])/2 :sorted[middleIndex]
console.log(middleAge)
//avarage age find
//range of the ages
//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the
