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

//finding high skills
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

    const foundIt=findHighSkilled(users)
    if(foundIt){
        console.log(`Highest skills: ${foundIt}`)
    }
    else{
        console.log("No one found..")
    
    }
    const foundPoint=greaterPoint(users)

    if(foundPoint){
        console.log(`Highest points: ${foundPoint}`)
    }
    else{
        console.log("No highest point found..")
    
    }
//seting my name without changing orginal object 

    const updateUsers={...users}
    updateUsers.me={
    email:"back@.com",
    skills:["Html","css", "js","React"],
    age:25,
    points:50
}
console.log( updateUsers)
console.log(users)
// taking user key

const userKey=[]
for( const userName in users){
    const proppertyUser= users[userName]
    userKey.push(userName)
    //property
    console.log(proppertyUser)

}console.log(userKey)
//key
//taking values
const valueOfObject = Object.values(users)
console.log(valueOfObject)

// findding spacefic country name
const findCountries= countries.find(({name})=> name === "Angola")
if(findCountries){
    const countryName= findCountries.name
    const countryCapital= findCountries.capital
    const countryPopulations= findCountries.population
    const countryLanguages= findCountries.languages

console.log(countryName)
console.log(countryCapital)
console.log(countryPopulations)
console.log(countryLanguages)
 } 
 else{
    console.log("Don't find any..")
     }
 
//finding all country name

const findAllCounty= countries.map(countries=> countries.name)
console.log(findAllCounty)

// creating object literal
const personAcoount={
    firstName:"kai",
    lastName:"aki",
    incomes:[],
    expenses:[],
    totalIncome:function(){
      let  total=0
        for(const  income of this.incomes){
            total+=income.amount
           
        }
        return  total
    },
    totalExpense:function(){
      let  total=0
        for(const  expense of this.expenses){
            total+=expense.amount
           
        }
        
        return  total
        
    },
    addIncome:function(discription,amount){
        this.incomes.push({discription,amount})
        console.log(discription ,amount)
    },
    
    addExpense:function(discription,amount){
        this.expenses.push({discription,amount})
        console.log(discription ,amount)
    },
    accountInfo:function(){
        console.log (this.firstName , this.lastName , this.totalIncome() , this.totalExpense(),this.accountBlanace())
    },
    accountBlanace:function(){
        return  this.totalIncome() -this.totalExpense()
    }
   
}
personAcoount.addIncome("salary",10000)
personAcoount.addExpense("product cost",6000)
personAcoount.addIncome("part time job",5000)
personAcoount.addExpense("shopping",4000)
personAcoount.accountInfo()
