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
