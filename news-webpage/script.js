const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('#input');
const cardContainer = document.querySelector('.card-container'); // Ensure this class exists in your HTML
let card_for_news = document.querySelector('.cards');

document.addEventListener('DOMContentLoaded', () => {
    async function newReport(topic) {
        const apiKey = 'f2b196184d0c4974b63aa6ce98335a98';
        const url = `https://newsapi.org/v2/everything?q=${topic}&from=2024-08-12&sortBy=publishedAt&apiKey=${apiKey}`;
        const response = await fetch(url);
        const newsData = await response.json();
        card_for_news.innerHTML = '';
        console.log(newsData.articles[1].title); // Test the API response
        
        
        for (let i = 0; i < newsData.articles.length; i++) {
            const card = document.createElement('div');
            card.innerHTML = '';
            card.className = 'card';

            card.innerHTML = `
                <div class="uiPart">
                <img src="${newsData.articles[i].urlToImage}" alt="image" class="news_img">
                <div class="desp">
                <h3 id="titleOfNews">${newsData.articles[i].title}</h3>
                <p id="description">${newsData.articles[i].description}</p>
                </div>
                <a href="${newsData.articles[i].url}" target="_blank" id="linkToNews">Show More...</a>
                </div>
                <div class="details">
                    <p id="name">${newsData.articles[i].author || 'Unknown Author'}</p>         
                    <p id="date">${new Date(newsData.articles[i].publishedAt).toLocaleDateString()}</p>
                </div>
            `;

            card_for_news.appendChild(card);
        }
    }

    searchBtn.addEventListener('click', () => {
        const inputValue = input.value.trim();
        newReport(inputValue); 
    });
});
