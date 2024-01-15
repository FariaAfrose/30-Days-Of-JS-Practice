// Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.
// Generating the keyboard code code using even listener. The image below.
const container=document.getElementById('container')
const errorMessage=document.getElementById('errorMessage')


function prime(num){

    if(num<2)
    return false
for(let i=2 ;i<=Math.sqrt(num);i++){
    if(num% i===0)
    return false
}return true
}
function submit(){
    container.innerHTML = '';

    let input=document.getElementById('numbrInput')
   if(!input.validity.valid){
    errorMessage.textContent="Please enter only number."
    errorMessage.style.color='red'
    return
   }
   errorMessage.textContent=''
   let imputValue=document.getElementById('numbrInput').value

    for(let i=1; i<=imputValue;i++){
        const div=document.createElement('div')
        div.className="number"
        div.textContent=i
        if(i%2===0){
            div.style.backgroundColor='lightblue'
        }else{
            div.style.backgroundColor='lightgreen'
    
        }if(prime(i)){
            div.style.backgroundColor='lightcoral'
    
        }

        container.appendChild(div)
}


}

function difaultNumber(){
    const difaultNum=50
    for(let i=1;i<=difaultNum; i++){
        const createDiv=document.createElement('div')
        createDiv.className="number"
        createDiv.textContent=i
        if(i%2===0){
            createDiv.style.backgroundColor='lightblue'
        }else{
            createDiv.style.backgroundColor='lightgreen'
    
        }if(prime(i)){
            createDiv.style.backgroundColor='lightcoral'
    
        }
        container.appendChild(createDiv)
    }   
}
difaultNumber()
