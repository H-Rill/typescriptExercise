//type Cities of object
export type Cities = {
    cityName: string;
    country: string;
    population: number;
};

export function getCities(): Cities[] {
    const storedCities = localStorage.getItem('cities');
    return storedCities ? JSON.parse(storedCities) : [];
}

export function setCities(cities: Cities[]): void {
    localStorage.setItem('cities', JSON.stringify(cities));
}


let citiesList: Cities[] = [];

export function addCities(){
    
    const inputCityName = document.getElementById('inputCityName') as HTMLInputElement;
    const inputCountry = document.getElementById('inputCountry') as HTMLInputElement;
    const inputPopulation = document.getElementById('inputPopulation') as HTMLInputElement;

    const cityName = inputCityName.value;
    const country = inputCountry.value;
    const population = parseInt(inputPopulation.value, 10);

    if(cityName.trim() === '' || country.trim() ==='' || isNaN(population)){
        alert('Please enter a valid data');
        return;
    }

    const newCities: Cities = {
        cityName: cityName,
        country: country,
        population: population
    };

    citiesList.push(newCities);

    // generateTableRows(citiesList);
    generateTableRows(citiesList);
    setCities(citiesList);
    console.log("addCities function called");
    
    inputCityName.value = '';
    inputCountry.value = '';
    inputPopulation.value = '';

} 



// function generateTableRows(data: Cities[]) {
//     const showTableData = document.getElementById("showTableData");

//     if (!showTableData) {
//         console.error("Table body element not found.");
//         return;
//     }

//     showTableData.innerHTML = '';

//     data.forEach((item) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `<td>${item.cityName}</td>
//                          <td>${item.country}</td>
//                          <td>${item.population}</td>`;
//                          showTableData.appendChild(row);
//     });
// }


function generateTableRows(cities: Cities[]) {
    const initialListTable = document.getElementById("initialList") as HTMLTableElement;
    const tbody = initialListTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    cities.forEach((cities) => {
        const row = document.createElement('tr');
        
        const cityNameCell = document.createElement('td');
        cityNameCell.textContent = cities.cityName;
        row.appendChild(cityNameCell);
        
        const countryNameCell = document.createElement('td');
        countryNameCell.textContent = cities.country;
        row.appendChild(countryNameCell);

        const populationCell = document.createElement('td');
        populationCell.textContent = cities.population.toString();
        row.appendChild(populationCell);

        tbody.appendChild(row);
    });
}



function searchData() {
    const input = (<HTMLInputElement>document.getElementById("search")).value.toLowerCase();
    const filteredData = citiesList.filter(cities => {
        const cityName = cities.cityName.toLowerCase();
        const country = cities.country.toLowerCase();
        const population = cities.population.toString().toLowerCase();
        return cityName.includes(input) || country.includes(input) || population.toString().includes(input);
    });

    clearTable();
    generateTableRows(filteredData);
}


function clearTable() {
    const tableBody = document.getElementById("tableBody");
    if (tableBody) {
        tableBody.innerHTML = "";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    citiesList = getCities();
    generateTableRows(citiesList);
});