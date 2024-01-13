//1
const nums=[1,2,3]
let [num1,num2,num3]=nums
console.log(num1,num2,num3)
//2
const names=["Aki","kai","loyi","back","chan"]
let [person1,person2,person3,person4,person5]=names
console.log(person1,person2,person3,person4,person5)

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants=[2.718,3.1415,9.8,37,100]
const [e,pi,gravity,humanBodyTemp,watherBoilingTemp]=constants
console.log(e,pi,gravity,humanBodyTemp,watherBoilingTemp)
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countrys=["finland" ,"estonia","sweden","denmark","norway"]
const [fin, est, sw, den, nor]=countrys
console.log(fin, est, sw, den, nor)
// Destructure the rectangle object by its properties or keys.
const rectangle={
    width:30,
    height:20,
    area:200
}
const {width,height,area}=rectangle
console.log(rectangle)
// Iterate through the users array and get all the keys of the object using destructuring
const users=[{name:"Aki",age:20,skills:["html","css","js"]},
{name:"kai",age:21,skills:["html","css","js","React"]}]
for(const {name,age,skills} of users){
    console.log(name,age,skills)
}
// Find the persons who have less than two skills
const userS=[{name:"Aki",age:20,skills:["html","css","js"]},
{name:"kai",age:21,skills:["html","css","js","React"]},{name:"lukas",age:21,skills:["html"]}]

const lessThenTwoSkills=userS.filter(({skills})=>skills.length<2)
console.log(lessThenTwoSkills)
// Destructure the countries object print name, capital, population and languages of all countries
const countyObj={
    Finland:{capital:"helsinki" ,population: 550000 , languages:["FIninish","swedish"]}
   , Sweden:{capital:"stockholm" ,population: 1000000 , languages:["sweden",]}
   , Norway:{capital:"oslo" ,population: 550000 , languages:["norway"]}
}
for(const [name,{ capital, population , languages} ]of Object.entries(countyObj)){
    console.log( capital, population , languages)
}

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const student=['josh',['html','css','js'],[85,90,92]]
const [name,skills,scores]=student
const [jsScore, , reactScore]=scores
const newStudent={
    name,
    skills:[...skills],
    scores,
    jsScore,
    reactScore
    
}
console.log(newStudent)
//
const studenT = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
  
 
//creating new obj
const newStudenT = {
    ...studenT,
    skills: {
        ...studenT.skills,
      frontEnd: [
        ...studenT.skills.frontEnd,
// Add Bootstrap with level 8 to the front end skill sets
        { skill: 'Bootstrap', level: 8 }
      ],
      backEnd: [
        ...studenT.skills.backEnd,
// Add Express with level 9 to the back end skill sets
        { skill: 'Express',level: 9 },
      ],
      dataBase:[
        ...studenT.skills.dataBase,
// Add SQL with level 8 to the data base skill sets
        { skill: 'SQL', level: 8 },
      ],
      dataScience:[
      ...studenT.skills.dataBase,
// Add SQL without level to the data science skill sets
      'SQL'
    ]
    }
  }

console.log(newStudenT)