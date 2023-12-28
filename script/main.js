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


const date= new Date();
showDatwetime(date)
console.log(date)

//with Math.max method --- arguments
function findMax( a,b,c){
const large=Math.max(a,b,c)
return large 
}
console.log(findMax(0,10,5))
console.log(findMax(0,-10,-2))

//with Math.max method --- arguments
function findMAX(a,b,c){
    const largeOfAB = a>b? a: b
    const large=largeOfAB >c? largeOfAB :c
    return large;
}
console.log(findMAX(0,10,5))
console.log(findMAX(0,-10,-2))

//Cheak Season
function checkSeason(season){
    if(typeof season!=='number'|| season >12 || season <1){
    return 'Invalid'  
  }
switch(season){
    case 12:
        case 1:
            case 2:
                return "winter"
    case 3:
        case 4:
            case 5:
                return "spring"
    case 6:
        case 7:
            case 8:
                return "summer"
    case 9:
        case 10:
            case 11:
                return "Autom"
default:
    return "Invalid month"
}}

console.log(checkSeason(7)
)
// 3. 
function printArray(array){
    for(i=0;i<array.length; i++){
const value1 = array[i]
    }
return  }
const array=[10,20,30,0,40]
printArray(array)
console.log(array[3])
//show date and time
function showDatwetime(date){
    const day= date.getDate()
    const month= date.getMonth()+1
    const year= date.getFullYear()
    //for time
    const hours=date.getHours()
    const min=date.getMinutes()
    const second=date.getSeconds()
    // console.log(day +"/"+ month +"/"+ year)
    console.log(`${day}/${month}/${year}  ${hours}:${min}:${second}`)
}

//swiping values
function swapValue(x,y){

    //distracturing
    [x,y]=[y,x]
    console.log(`x was 3- now ${x} , x was 4- now ${y} `)
    
    }
//random hexa-> 7 char 
function userIdGenerator(nameHere){
    let  newId='';
     for(let i=0; i<7;i++){
     const randomNum=Math.floor(Math.random()*16);
     const convertToHexa= randomNum.toString(16);
     newId+=convertToHexa;
 
 }
 return newId
 }
 const nameHere='akikai'
 console.log(userIdGenerator(nameHere));
//reverse array
function reversingArray(arr){
  let  array=[]
for(let i=arr.length-1; i>=0 ;i--){
    array.push(arr[i])
}
console.log(array)

}
reversingArray(["A","B","C","D","E","F"])

// 
 function  granaretUserId(){
const char= prompt("Enter number of  charaters:")
const id = prompt("Enter number of ids:")

const charecter="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz123456789"
 
for(let i=0;i<id;i++){
console.log(genarateId(Number(char),charecter))
                      }     }

function genarateId(char,charecter){
    
    let  newId='';
    for(let i=0; i<char;i++){
    const randomNum=Math.floor(Math.random()*charecter.length);
    newId+=charecter.charAt(randomNum);

}return newId
}
granaretUserId()
