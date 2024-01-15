// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red
//importing challanges
const container=document.getElementById('container')
function prime(num){
    if(num<2)
    return false
for(let i=2 ;i<=Math.sqrt(num);i++){
    if(num% i===0)
    return false
}return true
}
for(let i=0; i<=101;i++){
    const div=document.createElement('div')
    div.className="number"
    div.textContent=i
    if(i%2===0){
        div.style.backgroundColor='green'
    }else{
        div.style.backgroundColor='yellow'

    }if(prime(i)){
        div.style.backgroundColor='red'

    }
    container.appendChild(div)
}

// Use the countries array to display all the countries.See the design
const countryContainer=document.getElementById('countryContainer')
    // Total Number of countries: 
const length=document.getElementById('addCountryLeng')
length.textContent=`Total Number of countries:   ${countries.length}`
countries.forEach(element => {
    const countriDiv=document.createElement('div')
    countriDiv.className='countries'
    countriDiv.textContent=element
    countryContainer.appendChild(countriDiv)
});
