console.log(countries)
//fullName
const firstName='Aki'
const lastName='Kai'
console.log(firstName +" "+ lastName)
//declare a function fullName
function fullName(firstName,lastName){
  
console.log(`${firstName} ${lastName}`)
} 
fullName("Kai","Aki")

//declaring a function,two paramiter
function sum(a,b){
return a+b;
}
const result =sum(5,7)
console.log(result)
//area of length
function rectangular(length,width){
return 2*(length+width)

}
const areaOfLength=rectangular (10,5)
console.log(areaOfLength)
//perimeterOfRectangle
function rec(length,width,height){
    return length*width*height
    
    }
    const perimeterOfRectangle=rec (10,5,3)
    console.log(perimeterOfRectangle)
//3.
//array as paramiter
function printArray(array){
for(let i=0;i<array.length;i++){
console.log(array[i])
}}
const arrayHere=["A","C","D","X"]
printArray(arrayHere)
//show date and time
// function showDatwetime(date,time){

// }
// const date= new Date();
// console.log(date)