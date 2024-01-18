
document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://restcountries.com/v3.1/all';
    let currentSortOption = 'name';
    let currentSortOrder = 'asc';
    const nameBtn = document.getElementById('name');
    const capitalBtn = document.getElementById('capital');
    const populationBtn = document.getElementById('population');
    const searchInput = document.getElementById('searchInput');

    fetch(url)
        .then(response => response.json())
        .then(countries => {
            renderSortedCountries(countries);

            nameBtn.addEventListener('click', function () {
                currentSortOption = 'name';
                renderSortedCountries(getCountriersSortedBy(countries, currentSortOption, currentSortOrder));
            });

            capitalBtn.addEventListener('click', function () {
                currentSortOption = 'capital';
                renderSortedCountries(getCountriersSortedBy(countries, currentSortOption, currentSortOrder));
            });

            populationBtn.addEventListener('click', function () {
                currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
                currentSortOption = 'population';
                renderSortedCountries(getCountriersSortedBy(countries, currentSortOption, currentSortOrder));
            });

            searchInput.addEventListener('input', function () {
                const searchTeam = searchInput.value.toLowerCase();
                const filteredCountries = countries.filter(country => {
                    return (
                        country.name.common.toLowerCase().includes(searchTeam) ||
                        (country.capital && country.capital[0].toLowerCase().includes(searchTeam)) ||
                        (country.population && country.population.toString().includes(searchTeam))
                    );
                });
                renderSortedCountries(filteredCountries);
            });

            graphFunction(countries);
            Population(countries);
        });
});

function getCountriersSortedBy(countries, sortOption, sortOrder) {
    return countries.slice().sort((a, b) => {
        const aValue = String(getValueByOption(a, sortOption));
        const bValue = String(getValueByOption(b, sortOption));
        if (sortOrder === 'asc') {
            return aValue.localeCompare(bValue);
        } else {
            return bValue.localeCompare(aValue);
        }
    });
}

function getValueByOption(country, option) {
    switch (option) {
        case 'name':
            return country.name.common || '';
        case 'capital':
            return country.capital && country.capital[0] ? country.capital[0] : '';
        case 'population':
            return country.population || 0;
        default:
            return '';
    }
}

function createCountryCard(country) {
    const card = document.createElement('div');
    card.classList.add('country-card');
    const countryDetails = `
        <img src="${country.flags.svg}" alt="${country.name.common}Flag">
        <h2>${country.name.common}</h2>
        <p>Capital:${country.capital && country.capital[0] ? country.capital[0] : 'N?A'}</p>
        <p>Population: ${country.population || 'N/A'}</p>
        <p>Language:${country.language && country.language[0] ? country.language[0] : 'N?A'}</p> 
    `;

    card.innerHTML = countryDetails;
    return card;
}

function renderSortedCountries(countryList) {
    const cardContainer = document.getElementById('cardContent');
    cardContainer.innerHTML = '';
    countryList.forEach(country => {
        const card = createCountryCard(country);
        cardContainer.appendChild(card);
    });

    const numberOfcountries = document.getElementById('numberOfcountries');
    numberOfcountries.innerHTML = `Total numbers of countries ${countryList.length}`;
}

function graphFunction(countries) {
    const newDivSection = document.getElementById('newDIv');
    newDivSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(countries);
}

function Population(countries) {
    const feedback = document.querySelector('.feedback');
    feedback.innerHTML = '10 Most Populated countries in the world';

    if (!countries || countries.length === 0) {
        console.error('Error: No valid countries data.');
        return;
    }

    const sortCountries = countries.sort((a, b) => b.population - a.population);
    const ten = sortCountries.slice(0, 10);

    const container = document.querySelector('.container');
    container.innerHTML = ''; 

    ten.forEach(country => {
        const divPair = document.createElement('div');
        divPair.classList = 'div-pair';

        const countryName = document.createElement('div');
        countryName.classList.add('countryName');
        countryName.textContent = country.name.common;

        const progressbarContainer = document.createElement('div');
        progressbarContainer.classList = 'progressbarContainer';
        const progressbar = document.createElement('div');
        progressbar.classList = 'progress-bar';

        const countryPopulation = document.createElement('div');
        countryPopulation.classList.add('countryPopulation');
        countryPopulation.textContent = country.population;

        const maxPopulation = ten[0].population;
        const widthPercentage = (country.population / maxPopulation) * 100;
        progressbar.style.width = `${widthPercentage}%`;

        divPair.appendChild(countryName);
        progressbarContainer.appendChild(progressbar);
        divPair.appendChild(progressbarContainer);
        divPair.appendChild(countryPopulation);

        container.appendChild(divPair);

    });

}



