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
const countryDiv=document.querySelector('.container')
populationB.addEventListener('click', function () {

const maxPopulation=Math.max(...nameAndPopulation.map(country=>country.population))
    const divPairContainer = document.createElement('div');
    divPairContainer.classList = 'container';

    nameAndPopulation.forEach((country, index) => {
        const divPair=document.createElement('div')
        divPair.classList='div-pair'

        const countryName=document.createElement('div')
        countryName.classList.add('countryName')
        countryName.textContent = country.name;

        const progressbarContainer = document.createElement('div');
        progressbarContainer.classList = 'progressbarContainer';
        const progressbar = document.createElement('div');
        progressbar.classList = 'progress-bar';

        const countryPopulation=document.createElement('div')
         countryPopulation.classList.add('countryPopulation')
          countryPopulation.textContent = country.population;
const widthPercentage=(country.population/maxPopulation)*100
progressbar.style.width=`${widthPercentage}%`

        divPair.appendChild(countryName);
        progressbarContainer.appendChild(progressbar);
        divPair.appendChild(progressbarContainer);
        divPair.appendChild(countryPopulation);

        divPairContainer.appendChild(divPair)
    });

    countryDiv.innerHTML= ""
    countryDiv.appendChild(divPairContainer)
});



 
