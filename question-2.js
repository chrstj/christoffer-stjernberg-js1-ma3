<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get Requests</title>
        <link href="styles.css" rel="stylesheet" />
        <link rel="icon" href="data:;base64,=" />
    </head>
    <body>
        <div class="container">
            <h1>Games</h1>

            <div class="results">
                <div class="loader"></div>
            </div>
        </div>
        <script src="script.js"></script>
    </body>
</html>



h1 {
    font-family: Arial, Helvetica, sans-serif;
}


.loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #4dbbd6;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}


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



