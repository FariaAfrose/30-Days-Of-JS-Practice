const subtitle=document.querySelector('.subtitle')
const feedback=document.querySelector('.feedback')
const wrapper=document.querySelector('.wrapper')
const graphButtons=document.querySelector('.graph-buttons')
const populationB=document.getElementById('population')
const language=document.getElementById('language')
const graphtitle=document.querySelector('.graph-title')
const graphs=document.querySelector('.graphs')
const stat=document.querySelector('.stat')

subtitle.innerHTML=`Currently, we have ${countries_data.length} countries`

function Population(){
    feedback.innerHTML=`10 Most Populated countries in the world`
const sortCountries=countries_data.sort((a,b)=>b.population -a.population)
const ten=sortCountries.slice(0,10)

return ten
}

function Language(){
    feedback.innerHTML=`10 Most Spoken languages in the world`
   
}
const populatedCountries=Population(countries_data)
const nameAndPopulation = populatedCountries.map(country => ({ name: country.name, population: country.population }));
// const makingUl=document.createElement('ul')

populationB.addEventListener('click',function(){
    // container.innerHTML= ""
    const countryDiv=document.querySelector('.container')
    const div1=document.createElement('div')
    div1.classList='div1'
    const div2=document.createElement('div')
    div2.classList='div2'
    nameAndPopulation.forEach(country=>{
        const countryName=document.createElement('div')
        const countryPopulation=document.createElement('div')
        countryName.classList.add('countryName')
        countryPopulation.classList.add('countryPopulation')

        

        countryName.textContent=`${country.name} `
        countryPopulation.textContent=`${country.population} `
        div1.appendChild(countryName)
        div2.appendChild(countryPopulation)
       
    })
    countryDiv.appendChild(div1)
    countryDiv.appendChild(div2)

})

