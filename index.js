"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCities = exports.setCities = exports.getCities = void 0;
function getCities() {
    const storedCities = localStorage.getItem('cities');
    return storedCities ? JSON.parse(storedCities) : [];
}
exports.getCities = getCities;
function setCities(cities) {
    localStorage.setItem('cities', JSON.stringify(cities));
}
exports.setCities = setCities;
let citiesList = [];
function addCities() {
    const inputCityName = document.getElementById('inputCityName');
    const inputCountry = document.getElementById('inputCountry');
    const inputPopulation = document.getElementById('inputPopulation');
    const cityName = inputCityName.value;
    const country = inputCountry.value;
    const population = parseInt(inputPopulation.value, 10);
    if (cityName.trim() === '' || country.trim() === '' || isNaN(population)) {
        alert('Please enter a valid data');
        return;
    }
    const newCities = {
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
exports.addCities = addCities;
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
function generateTableRows(cities) {
    const initialListTable = document.getElementById("initialList");
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
    const input = document.getElementById("search").value.toLowerCase();
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
