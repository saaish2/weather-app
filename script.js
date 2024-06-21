const apiKey = 'ec28e0a88dcb802ea65c6e762e3155cc';

function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }
    console.log(city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').innerHTML = `Temperature: <span>${data.main.temp}°C</span> (Feels like: <span>${data.main.feels_like}°C</span>)`;
                document.getElementById('description').innerHTML = `Weather: <span>${data.weather[0].description}</span>`;
                document.getElementById('humidity').innerHTML = `Humidity: <span>${data.main.humidity}%</span>`;
                document.getElementById('wind-speed').innerHTML = `Wind Speed: <span>${data.wind.speed} m/s</span>`;
                document.getElementById('visibility').innerHTML = `Visibility: <span>${data.visibility / 1000} km</span>`;

                const iconCode = data.weather[0].icon;
                document.getElementById('weather-icon').style.backgroundImage = `url(http://openweathermap.org/img/wn/${iconCode}@2x.png)`;
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again.');
            console.error('Error:', error);
        });
}

