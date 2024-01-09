//Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem("firstName",'Aki')
localStorage.setItem("lastName",'kai')
localStorage.setItem("age",24)
localStorage.setItem("country",'Japhane')
localStorage.setItem("city",'soul')
//object
const students={
    firstName:"Loye",
    lastName:"backhum",
    age:"32",
    country:"south korea",
    enrolled:true
}
localStorage.setItem('Students Info' ,JSON.stringify(students))
//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

 const personAccount={
    firstName:"Jon",
    lastName:"Lyep",
    age:"32",
skills:['js','react','node.js']  ,  
enrolled:true
}
localStorage.setItem('personAccount' ,JSON.stringify(personAccount))

let person=localStorage.getItem("personAccount")
let parentAccountInfo= JSON.parse(person)
console.log(parentAccountInfo)
//just skills
let skills=parentAccountInfo.skills
console.log(skills)

//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount2={
    firstName:"Jon",
    lastName:"Lyep",
   
    income:[],
    expenses:[],
    totalIncome:0,
    totalExpense:0,
    totalBalance:0,

    
    // methods addIncome
addIncome:function (discription,amount){
    this.income.push({discription,amount})
    this.calTotalIncome()
    this.accountBalance()
},
// methods addExpense 
addExpense:function (discription,amount){
    this.expenses.push({discription,amount})
    this.calTotalExpense()
    this.accountBalance()
},
// methods totalIncome
calTotalIncome:function (){
    this.totalIncome=[...this.income].reduce((sum,income)=>sum + income.amount, 0)
},
// methods totalExpense
calTotalExpense:function (){
    this.totalExpense=[...this.expenses].reduce((sum,expenses)=>sum + expenses.amount, 0)
},


// methods accountBalance  
accountBalance:function (){
    this.totalBalance=  this.totalIncome - this.totalExpense
},

// methods accountInfo
accountInfo:function (){
    console.log(`Information: ${this.firstName} ${this.lastName}`)
    console.log(`Total Income ${this.totalIncome}`)
    console.log(`Total Expense ${this.totalExpense} `)
    console.log(`Total Balance ${this.totalBalance} `)
    
}
}
personAccount2.addIncome("Salary",10000)
personAccount2.addIncome("Parttimejob",5000)
personAccount2.addExpense("Product ",1000)
personAccount2.addExpense("Bill",100)
personAccount2.accountInfo()
