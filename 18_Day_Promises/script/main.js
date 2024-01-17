// Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch('https://restcountries.com/v3.1/all')
.then(response=>response.json())
.then(countries=>{
    countries.forEach(country=>{
        console.log('Country', country.name?.common||'N/Y')
        console.log('Capital', country.capital?.[0]||'N/Y')
        
        console.log('Language', Object.values(country.languages||{}).join(','))
        console.log('Population', country.population||'N/Y')
        console.log('Area', country.area ||'N/Y', 'square kilometers\n')

    })
    // Read the countries api and find out the 10 largest countries
    const largestCountries=countries.filter(country=>country.area).sort((a,b)=>b.area -a.area).slice(0,10)
    console.log("Largest Countries",largestCountries.map(country=>country.name?.common||'N/Y'))
    // Read the countries api and count total number of languages in the world used as officials. 
    const  totalLanguage  =countries.flatMap(country2=>Object.values(country2.languages||{}))
    const mm=[...new Set (totalLanguage)]
    console.log("Total Language", mm.length)
})
    .catch(error=>console.log("Error fetching countries",error))
// Print out all the cat names in to catNames variable.
let catNames=[]
fetch('https://api.thecatapi.com/v1/breeds')
.then(response=>response.json())
.then(catBreeds=>{
    catNames=catBreeds.map(cat=>cat.name)
        console.log('cat Names',catNames )
})
    .catch(error=>console.log("Error fetching countries",error))

// Read the cats api and find the average weight of cat in metric unit.
fetch('https://api.thecatapi.com/v1/breeds')
.then(response=>response.json())
.then(catBreeds=>{
 const  weights=catBreeds.map(cat=>parseFloat(cat.weight.metric))
 const  avgweights=weights.reduce((sum,weight)=>sum+parseFloat(weight),0)/weights.length
        console.log('Avarage cat weight',avgweights.toFixed(2) ) 
})
    .catch(error=>console.log("Error fetching countries",error))


