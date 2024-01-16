const sending= document.getElementById('card')
const makeDiv= document.getElementById('makeDiv')
let count={}
document.addEventListener('keydown',function(e){
    const changeColor=e.key
    const spanE= document.createElement('span')
    spanE.textContent=changeColor
    spanE.style.color = '#347b34';
    spanE.id="spanId"
    spanE.style.fontSize = '22px';
    sending.textContent='You clicked '  
    sending.appendChild(spanE)

    count[changeColor]=(count[changeColor]|| 0)+1
    makeDiv.textContent=`${count[changeColor]}`

})
