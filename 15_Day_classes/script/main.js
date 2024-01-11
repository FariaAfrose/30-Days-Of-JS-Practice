// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal{
    constructor(name,age,color,legs){
        this.name=name
        this.age=age
        this.color=color
        this.legs=legs
        
    }

    owner(){
    console.log(`${this.name} owner is Me` )
    }
    displayInfo(){
        console.log(`Name: ${this.name} , age: ${this.age} , color: ${this.color},legs : ${this.legs}` )

    }

}
const animal1= new Animal("cow",5,"brown" , 4)

animal1.owner()
// Create a Dog and Cat child class from the Animal Class.
class Cat extends Animal{
    constructor (name,age,color){
super(name,age,color)
    }
    owner(){
        console.log(`Now i'm ${this.name}'s owner..`)
    }

}
class Dog extends Animal{
    constructor (name,age,color){
        super(name,age,color)

    }
    // Override the method you create in Animal class

    owner(){
        console.log(`Now i'm ${this.name}'s owner..`)
    }

}

const cat= new Cat ('jugno',1,'white')
const dog= new Dog ('juglish',3,'black')
cat.owner()
dog.owner()



// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.


// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount2{
   constructor(firstName,lastName){

    this.firstName=firstName
        this.lastName=lastName
        this.income=[]
        this.expenses=[]
        this.totalIncome=0
        this.totalExpense=0
        this.totalBalance=0

   }

    
    // methods addIncome
addIncome (discription,amount){
    this.income.push({discription,amount})
   
}
// methods addExpense 
addExpense (discription,amount){
    this.expenses.push({discription,amount})
   
}
// methods totalIncome
calTotalIncome (){
     this.totalIncome=[...this.income].reduce((sum,income)=>sum + income.amount, 0)
     return this.totalIncome
}
// methods totalExpense
calTotalExpense (){
     this.totalExpense=[...this.expenses].reduce((sum,expenses)=>sum + expenses.amount, 0)
     return this.totalExpense

    }


// methods accountBalance  
accountBalance (){
    this.calTotalIncome()
    this.calTotalExpense()

     this.totalBalance=  this.totalIncome - this.totalExpense
     return this.totalBalance
}

// methods accountInfo
accountInfo (){
    this.accountBalance()
    return `Information: 
${this.firstName} ${this.lastName} , 
Total Income ${this.totalIncome},
Total Expense ${this.totalExpense},
Total Balance ${this.totalBalance}`

    
}
}
const personAccount2=new PersonAccount2('John' ,'Doe')
personAccount2.addIncome("Salary",10000)
personAccount2.addIncome("Parttimejob",5000)
personAccount2.addExpense("Product ",1000)
personAccount2.addExpense("Bill",100)
// personAccount2.accountInfo()
console.log(personAccount2.accountInfo())