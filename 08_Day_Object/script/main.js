console.log(countries)
// creating and empty object
const dog={}
//creating object 
console.log(dog)
//adding 
dog.name="loye"
dog.age=20
dog.legs=2
dog.color='brown'
dog.bark=function(){
   return 'woolf-woolf'
}
//geting
const dogName=dog.name;
const dogAge=dog.age;
const dogLegs=dog.legs;
const dogColor=dog.color;
const dogBark=dog.bark();
//seting new property
 dog.gender='male'
 dog.info= function (){
return `Dog name is ${this.name}, age is  ${this.age} , color is ${this.color}  and sound ..  ${this.bark()}`
}
console.log(dogName ,dogAge,dogLegs,dogColor)
const info=dog.info()
console.log(info)

//finding SKILLS
 const users={alex:{
    email:"alex@.com",
    skills:["Html","css", "js"],
    age:20,
    points:64
 },kai:{
    email:"kai@.com",
    skills:["phython","Html","css", "js"],
    age:22,
    points:30
 },lay:{
    email:"lay@.com",
    skills:["Html","css","React"],
    age:25,
    points:49
 },chen:{
    email:"chen@.com",
    skills:["Html","css", "js","MangoBD","React"],
    age:21,
    points:36
 }
}
function findHighSkilled(userObject){
    let maxSkill=0;
    let personWithMaxSkill=null
    for(const userName in userObject){
      const   user=userObject[userName]
        if(user.skills && user.skills.length > maxSkill ){
         maxSkill= user.skills.length 
         personWithMaxSkill=userName
        }
       
    }return personWithMaxSkill
    }
//Gratter then 50 points

function greaterPoint(object){
    let maxPoint=0
let personWithMaxPoint=null
for(const user in object ){
    if(object[user].points >=50 && object[user].points >maxPoint){
        maxPoint= object[user].points 
        personWithMaxPoint=user
        
    }return personWithMaxPoint
}}

    const foundPoint=greaterPoint(users)
    const foundIt=findHighSkilled(users)
    if(foundIt){
        console.log(`Highest skills: ${foundIt}`)
    }
    else{
        console.log("No one found..")
    
    }
    if(foundPoint){
        console.log(`Highest points: ${foundPoint}`)
    }
    else{
        console.log("No highest point found..")
    
    }
    

