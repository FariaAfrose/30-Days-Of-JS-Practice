//1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph=document.querySelector('p')
console.log(firstParagraph.textContent)
//2. Get each of the the paragraph using document.querySelector('#id') and by their id
const paragraphId1=document.querySelector('#id1')
const paragraphId2=document.querySelector('#id2')
const paragraphId3=document.querySelector('#id3')
const paragraphId4=document.querySelector('#id4')
console.log(paragraphId1.textContent ,paragraphId2.textContent, paragraphId3.textContent,paragraphId4.textContent)

//3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allPar=document.querySelectorAll('p')
console.log("Get all the p->")
//4. Loop through the nodeList and get the text content of each paragraph
allPar.forEach(par=>{
    console.log( par.textContent)

})

//5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const fourthPer=document.querySelectorAll('p')[3]
fourthPer.textContent="Fourth Paragraph.."
console.log(paragraphId4.textContent)
//6. Set id and class attribute for all the paragraphs using different attribute setting methods
const findNew=document.querySelectorAll('div p')

findNew.forEach((par,index)=>{
    // par.setAttribute('id',`Id${index+1}`)
    // par.setAttribute('class',`class${index+1}`)
    //1.Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
    par.style.backgroundColor="black"
    par.style.border="1px solid red"
    par.style.fontSize="px"
    par.style.fontFamily="Arial,sans-serif"
    par.style.padding="5px"
    //3. Set text content, id and class to each paragraph

    par.textContent=    `paragaph${index+1}`
    par.id=    `paragaphId${index+1}`
    par.classList.add(`paragaph${index+1}`)   
    //2.Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
if(index %2===0){ par.style.color="green"
}else{ par.style.color="red"}
})



// DOM: Mini project 1
// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
document.addEventListener("DOMContentLoaded",()=>{

const div=document.getElementById('wrapper')
const year=div.querySelector(' h1 span')
year.style.fontSize="60px"
const dateAndTime=document.getElementById('addHeader')
const challanges=div.querySelector('li')

function timeAndDate(){
const currentDate=new Date()
const date=currentDate.toDateString()
const time=currentDate.toLocaleTimeString()
dateAndTime.textContent=`${date} ${time}`
}

timeAndDate()

setInterval(()=>{
    year.style.color=randomColor()
},1000)
setInterval(()=>{

    dateAndTime.style.backgroundColor=randomColor()
    timeAndDate()

},1000)

Array.from(challanges).forEach(challange=>{
    const findStatus=challange.textContent.split('').pop().toLowerCase()
switch(findStatus){
    case 'done':
        challange.style.backgroundColor='green'
    break
    case 'ongoing':
        challange.style.backgroundColor='yellow'
    break
    case 'coming':
        challange.style.backgroundColor='red'
    break
    default:
        break
}
})
function randomColor(){
    const letter='ABCDEFGHIabcd'
    let color="#"
    for(let i=0;i<6;i++){
        color +=letter[Math.floor(Math.random()*16)]
    }
    return color
}
})
