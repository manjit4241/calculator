const searchbtn = document.querySelector('#search');
const inputCity = document.querySelector('#city');
const temp = document.querySelector('#temp');
const imageStatus = document.querySelector('#weather_img')
const weather_type = document.querySelector('#weather_type')

document.addEventListener('DOMContentLoaded',()=>{
async function checkWeather(city) {
    const apikey = "bafe200fa84ac7734449e3ec3053cbcc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    await fetch(url)
        .then(response => {
            // if (!response.ok) {
            //     throw new Error('Network response was not ok ' + response.statusText);
            // }
            return response.json();
        })
        .then(weather_data => {
            // console.log(weather_data);
            const temperature = weather_data.main.temp;
            temp.textContent = `${Math.round(temperature)}°C`;
            document.querySelector('#feels_like').innerHTML = `But Feels like ${Math.round(weather_data.main.feels_like)}°C` 
            document.querySelector('#wind').textContent = `Wind : ${weather_data.wind.speed}km/h`
            document.querySelector('#humidity').textContent = `Humidity : ${weather_data.main.humidity}%`
            document.querySelector('#maxT').textContent = `Max Temp : ${Math.round(weather_data.main.temp_max)}°C`
            document.querySelector('#minT').textContent = `Min Temp : ${Math.round(weather_data.main.temp_min)}°C`
            weather_type.textContent = `${weather_data.weather[0].main}`
            switch(weather_data.weather[0].main){
                case 'Clear' : 
                imageStatus.src = 'assets/clear.png';
                break;
                case 'Clouds' : 
                imageStatus.src = 'assets/cloud.png';
                break;
                case 'Mist' : 
                imageStatus.src = 'assets/mist.png';
                break;
                case 'Rain' : 
                imageStatus.src = 'assets/rain.png';
                break;
                case 'Snow' : 
                imageStatus.src = 'assets/snow.png';
                break;
                case 'Haze' : 
                imageStatus.src = 'assets/haze.png';
                break;
                default : 
                imageStatus.src = 'assets/404.png'
                break;
            }
            console.log(weather_data.weather[0].main);
            
        })
        .catch(error => {
            temp.textContent = 'Unable to retrieve weather data.';
        });
}
    searchbtn.addEventListener('click', () => {
        const cityName = inputCity.value.trim();
        checkWeather(cityName);
        
        // console.log(cityName);
    });  
})