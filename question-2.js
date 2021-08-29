const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e599b61132e04712b81b3ccd7a660e90";

const resultsContainer = document.querySelector(".results");

async function getData() {

const response = await fetch (url);

const data = await response.json();

resultsContainer.innerHTML = "";

const games = data.results;

for (let i = 0; i < games.length; i++) {
   

    if (i === 8) {
        break;
    }

    resultsContainer.innerHTML += `<div class="result">Name: ${games[i].name}</div>`;
    resultsContainer.innerHTML += `<div class="result">Rating: ${games[i].rating}</div>`;
    resultsContainer.innerHTML += `<div class="result">Tags: ${games[i].tags.length}</div>`;
}
}
getData();



