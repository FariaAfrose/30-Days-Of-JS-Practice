document.addEventListener('DOMContentLoaded',function(){
    const playerList=document.getElementById('playerList')
    const addPlayerButton=document.getElementById('addPlayer')
addPlayerButton.addEventListener('click',function(){
    const firstName=document.getElementById('firstName').value
    const lastName=document.getElementById('lastName').value
    const country=document.getElementById('country').value
    const score=document.getElementById('score').value
    const addError=document.getElementById('addError')

if(firstName && lastName && country && !isNaN(score)){
    createPlayerCard(firstName,lastName,country,score)
    document.getElementById('firstName').value=''
    document.getElementById('lastName').value=''
   document.getElementById('country').value=''
   document.getElementById('score').value=''
}else{
    addError.innerHTML=`Invalid values`
}
})
function createPlayerCard(firstName,lastName,country,score){
    const playerCard=document.createElement('div')
    playerCard.classList.add('player-card')
    playerCard.score = score; 
    const playerInfo=document.createElement('div')
    playerInfo.innerHTML = `<strong>${firstName} ${lastName} &nbsp;&nbsp; ${country} &nbsp;&nbsp; <span id='score'>${score}</span></strong>`;
    playerCard.appendChild(playerInfo)

    const playerAction=document.createElement('div')
    playerAction.classList.add('player-actions')
    const increaseButton=document.createElement('button')
    increaseButton.textContent="+5"
    increaseButton.classList='increaseButton'

    increaseButton.addEventListener('click',function(){
        updateScore(playerCard, 5);    })
    playerAction.appendChild(increaseButton)
    const decreaseButton=document.createElement('button')
    decreaseButton.classList='decreaseButtonID'
    decreaseButton.textContent="-5"
    decreaseButton.addEventListener('click',function(){
        updateScore(playerCard, -5);            })
            playerAction.appendChild(decreaseButton)

            const deleteButton=document.createElement('button')
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.classList='deleteButton'
  
            deleteButton.addEventListener('click',function(){
playerCard.remove()})
playerAction.appendChild(deleteButton)
playerCard.appendChild(playerAction)
playerList.appendChild(playerCard)
function updateScore(playerCard,change){
    playerCard.score += change; 
    document.getElementById('score').textContent = playerCard.score;
}


}

})