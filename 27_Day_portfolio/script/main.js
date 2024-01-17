
const cardContainer=document.getElementById("cardContainer")
const cardText=['JAVASCRIPT FOR EVERYONE', '30DAYS OF PYTHON ','30DAYS OF JAVA ']
const techText=['JAVASCRIPT ', ' PYTHON ',' JAVA ']
 const iconData=[
    ['🌱 ', ' Educator'],
    ['💻 ', ' Programmer'],
    ['🌐 ', ' Developer'],
    ['🔥 ', ' Motivator'],
    ['📔 ', ' Content Creator']

  ]
const puthere=document.getElementById('puthere')
let iconIndex=0
function iconF(){
    const [icon,role]=iconData[iconIndex]
    puthere.innerHTML=`<span> ${icon} </span>&nbsp&nbsp ${role}`
    iconIndex=(iconIndex+1)% iconData.length

}
setInterval(iconF,1000)
for(let i =0; i<3;i++){
    const card=document.createElement('div')
    card.classList.add('card')
    const cardItem=document.createElement('p')
    cardItem.textContent=cardText[i]
    card.appendChild(cardItem)
cardContainer.appendChild(card)
}
const techSpan=document.getElementById('techSpan')
techSpan.textContent=techText[0]
let index=1
setInterval(()=>{
    techSpan.textContent=techText[index]
    index=(index+1)%techText.length
},2000)