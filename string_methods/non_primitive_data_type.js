//array manipulation

let nums =[1,2,3]
 nums[0]=10
 console.log("Non-primitive data types " + nums)

//same property values  but different instances ,array comparison
 let num =[1,2,3]
 let numbers=[1,2,3]

 console.log( nums==numbers)

 //object comparison
 let userOne={
    name:'Asabeneh',
    role:'teaching',
    country:'Findland'
 }
 let userTwo={
    name:'Asabeneh',
    role:'teaching',
    country:'Findland'
 }
 console.log(userOne==userTwo)
//array assignment
 let numbersT =nums
 console.log(nums ==numbersT)

//object assignment
 let userThree={
    name:'Asabeneh',
    role:'teching',
    country:'Findland' }
 let userFour=userThree
console.log(userFour=userThree)