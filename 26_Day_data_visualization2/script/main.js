
function createCountryCard(country){
    const card=document.createElement('div')
    card.classList.add('country-card')
    card.textContent=country
    return card

}
function renderCountryCards(countryList){
    const cardContainer=document.getElementById('cardContent')
    cardContainer.innerHTML=''
    countryList.forEach(country => {
        const card=createCountryCard(country)
        cardContainer.appendChild(card)      
    });
}
document.addEventListener('DOMContentLoaded',function(){
    const startingWordBtn=document.getElementById('startingWord')
    const searchWithAnyWordBtn=document.getElementById('searchWithAnyWord')
    const upDownArrorBtn=document.getElementById('upDownArrow')
    const searchInput=document.getElementById('searchInput')
    const searchIcon=document.getElementById('searchIcon')
    renderCountryCards(countries)
    startingWordBtn.addEventListener('click',function(){
        const stratwith=document.getElementById('stratwith')
        const startingLetter=searchInput.value.charAt(0).toUpperCase()
        const filteredCountries=filteredCountriesByStartingLetter(countries,startingLetter)
        stratwith.innerHTML=`Country Start WIth: ${startingLetter} - <span style=color:red > ${filteredCountries.length} </span> `

        renderCountryCards(filteredCountries)
    })

    searchWithAnyWordBtn.addEventListener('click',function(){
    const searchTeam=searchInput.value.toLowerCase()
    const filteredCountries=filteredCountriesByAnyWord(countries,searchTeam)
    renderCountryCards(filteredCountries)
})
    upDownArrorBtn.addEventListener('click',function(){
    const scrollAmount=300
    const scrollDirection=upDownArrorBtn.classList.contains('up')? -1:1
    window.scrollBy(0,scrollAmount*scrollDirection)
    
})
    searchIcon.addEventListener('click',function(){
        const searchTeam=searchInput.value.toLowerCase()
    const filteredCountries=filteredCountriesByAnyWord(countries,searchTeam)
    renderCountryCards(filteredCountries)
    
})
function filteredCountriesByStartingLetter(countries,startingLetter){
    return countries.filter(country=>country.startsWith(startingLetter))
}
function filteredCountriesByAnyWord(countries,searchTeam){
    return countries.filter(country=>country.toLowerCase().includes(searchTeam))
}
})

const numberOfcounterys=document.getElementById('numberOfcounterys')
numberOfcounterys.innerHTML= `Total numbers of countries ${countries.length}`


