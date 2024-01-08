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
const studentsObj=[
    {
        firstName:"Loye",
        lastName:"backhum",
        skills:['Js',"react",'angular' ,'Html']
 },
    {
        firstName:"AKi",
        lastName:"chen",
        skills:["react",'angular' ,'Html']
 }
   , {
        firstName:"KAi",
        lastName:"loye",
        skills:['Js',"react",'Html']
 }
]
//js object ka json convet-> stringify
const studentsObjUp =JSON.stringify(studentsObj,["firstName",'lastName','skills'],4)
console.log(studentsObjUp)


// Parse the txt JSON to object.

//Json string yo valid js object -JSON.parse
const parseinG=JSON.parse(studentsObjUp)
console.log(parseinG)

// Find the user who has many skills from the variable stored in txt.
let maxSkills=0
let userWithmaxSkills= null
for (const user of  parseinG){
    const countSkill=user.skills.length
    if(countSkill>maxSkills){
        maxSkills= countSkill
        userWithmaxSkills=user
}

}
console.log(userWithmaxSkills)
