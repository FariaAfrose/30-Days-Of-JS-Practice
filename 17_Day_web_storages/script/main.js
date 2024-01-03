//Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem("firstName",'Aki')
localStorage.setItem("lastName",'kai')
localStorage.setItem("age",24)
localStorage.setItem("country",'Japhane')
localStorage.setItem("city",'soul')
//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const students={
    firstName:"Loye",
    lastName:"backhum",
    age:"32",
    country:"south korea",
    enrolled:true
}
localStorage.setItem('Students Info' ,JSON.stringify(students))
//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
 const personAccount={
    firstName:"Jon",
    lastName:"Lyep",
    age:"32",
    country:"south korea",
    enrolled:true
}