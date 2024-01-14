// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red
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

// Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.

