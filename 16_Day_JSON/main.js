//Change skills array to JSON using JSON.stringify()
const skills=['Js',"react",'angular' ,'Html']
const skillsUpdate=JSON.stringify(skills)
console.log(skillsUpdate)
// Stringify the age variable
const age=32
const ageUpdate=JSON.stringify(age)
console.log(ageUpdate)
// Stringify the isMarried variable
const isMarried=true
const isMarriedUpdate=JSON.stringify(isMarried)
console.log(isMarriedUpdate)
// Stringify the student object
const students={
    firstName:"Loye",
    lastName:"backhum",
    age:"32",
    country:"south korea",
    enrolled:true
}
const studentsUpdate=JSON.stringify(students)
console.log(studentsUpdate)
//Stringify the students object with only firstName, lastName and skills properties
// Exercises Lev


//Parse the txt JSON to object.
// Find the user who has many skills from the variable stored in txt.