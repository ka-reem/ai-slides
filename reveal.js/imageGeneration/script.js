const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

function performSearch() {
    const query = searchInput.value;
    const url = `https://www.googleapis.com/customsearch/v1?key=${config.googleImageApiKey}&cx=${config.googleSearchEngineId}&q=${query}&searchType=image`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResults(data.items);
        })
        .catch(error => console.error('Error:', error));
}

function displayResults(items) {
    resultsDiv.innerHTML = '';
    items.forEach(item => {
        const img = document.createElement('img');
        img.src = item.link;
        img.alt = item.title;
        resultsDiv.appendChild(img);
    });
}

searchButton.addEventListener('click', performSearch);