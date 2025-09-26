console.log ("Script loaded");
console.log ("Hello, Weather Reimagined HK!");

const tempElement = document.getElementById('temp');

function getfutureTwoDayTemp() {
    fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en")
    .then (response => {
        if (!response.ok) {
            throw new Error (`HTTP error! status: ${response.status}`);   
        }
        return response.json();
    })
    .then (data => {
        console.log(data);
        const firstDay = data.weatherForecast[0];
        const minTempValue = firstDay.forecastMintemp.value;
        const unit = firstDay.forecastMintemp.unit;
        const minTemp = minTempValue + "°" + unit;
        const maxTempValue = firstDay.forecastMaxtemp.value;
        const maxTemp = maxTempValue + "°" + unit;
        const futureOneDayTempRange = minTemp + " - " + maxTemp;
        console.log(`Forecasted min temp: ${minTempValue}°${unit}`);
        console.log(`Forecasted max temp: ${maxTempValue}°${unit}`);
        console.log(minTemp);
        console.log(maxTemp);
        console.log(futureOneDayTempRange);
        tempElement.textContent = futureOneDayTempRange;
        return(futureOneDayTempRange);
    }) 
    .catch (error => {
        console.log("Fetch error: " + error);
    })
}

function http(link) {
    fetch(link)
    .then (response => {
        if (!response.ok) {
            throw new Error (`HTTP error! status: ${response.status}`);   
        }
        return response.json();
    })
    .then (data => {
        console.log(data);
        return(data);
    }) 
    .catch (error => {
        console.log("Fetch error: " + error);
    })
}

document.addEventListener("DOMContentLoaded", function() {
    getfutureTwoDayTemp();
});