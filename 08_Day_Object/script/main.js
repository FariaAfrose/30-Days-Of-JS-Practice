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

//finding 
 const users={alex:{
    email:"alex@.com",
    skills:["Html",'css, "js'],
    age:20,
    points:34
 },kai:{
    email:"kai@.com",
    skills:["phython","Html",'css, "js'],
    age:22,
    points:30
 },lay:{
    email:"lay@.com",
    skills:["Html",'css',"React"],
    age:25,
    points:30
 },chen:{
    email:"chen@.com",
    skills:["Html",'css, "js',"MangoBD"],
    age:21,
    points:36
 }
}
