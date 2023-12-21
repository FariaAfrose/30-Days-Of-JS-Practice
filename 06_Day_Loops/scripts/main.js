console.log(countries)
alert('Open the console and check if the countries has been loaded')

//1. 0 to 10
// for(i=0;i<=10 ;i++)
// console.log(i)
let i=0
while(i<=10){
    console.log(i)
    i++
}
//2. 10 to 0
for(k=10;k>=0 ;k--)
console.log(k)

// 0 to n 
const n=prompt('Enter a value : ')
let q=0
while(q<=n){
    console.log(q)
    q++
}
//patern
//even number,odd
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("even "+ i)
    } else if(i%2 !==0) {
        console.log("odd " +i)
 }    

}
//prime num

//0-100 ,print the sum 
sum=0;
for(let j=0;j<=100;j++){
    sum +=j
}
console.log("Sum: "+sum)

//random number
const randomArray=[]
for(let i =0;i<5;i++){
    const randomNumber=Math.floor(Math.random()*100)+1
    // console.log(randomNumber)

    randomArray.push(randomNumber)
}
console.log(randomArray)
//uniqe random number
const array=[]
for(let i =0;i<5;i++){
    const randomNum=Math.floor(Math.random()*100)+1
    // console.log(randomNumber)
if(!array.includes(randomNum)){
    array.push(randomNum)

}
}
console.log(array)
//random char
const char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgrijklmnopqrstuvwxyz"
let randomId=""
for(let i =0;i<6;i++){
    const randomChar=Math.floor(Math.random()*char.length)
    randomId +=char.charAt(randomChar)

}console.log(randomId)
//any number of char random id..
const char2=prompt('Put charecters: ')
const length=prompt('enter length ')
let randomId2=""
for(let i =0;i<length;i++){
    const randomChar=Math.floor(Math.random()*char2.length)
    randomId2 +=char2.charAt(randomChar)

}console.log(randomId2)

//converting to hexadecimal num
const input=prompt("Enter here: ")
const randomNum=Math.floor(Math.random()*16777215)
const convertToHexa= randomNum.toString(16)
console.log(convertToHexa)
// uppercasing the country
const uppercaseResult=[]
for(const country of countries){
    uppercaseResult.push(country.toUpperCase())
}
console.log(uppercaseResult)
//RGB color random
const color=prompt("Enter color: ")
//(using template literal)
const randomColor=   `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
console.log(randomColor)
//creating an array for countrys length
const arrayforCountry=[]
 for(const variable of countries){
    arrayforCountry.push(variable.length)
 }
 console.log(arrayforCountry)
 //
