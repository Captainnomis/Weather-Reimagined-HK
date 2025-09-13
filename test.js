function generalSituationGet(lang){
    if (lang == "eng") {
        fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en")
        .then (response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('.weather-data').textContent = data.generalSituation;
        });
    } else if (lang == "chi") {
        fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc")
        .then (response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('.weather-data').textContent = data.generalSituation;
        });
    }
}

function forecastPeriodGet(lang){
    if (lang == "eng") {
        fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en")
        .then (response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('.forecast-period').textContent = data.forecastPeriod;
        });
    } else if (lang == "chi") {
        fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc")
        .then (response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('.forecast-period').textContent = data.forecastPeriod;
        });}
}

function forecastGet(lang){
    if (lang == "eng") {
        fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en")
        .then (response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('.forecast-data').textContent = data.forecastDesc;
        })
    } else if (lang == "chi") {
        fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc")
        .then (response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
        })
        .then (data => {
            document.querySelector('.forecast-data').textContent = data.forecastDesc;
        })
    }
}
function initializeHomeBar(lang) {
    if (lang == "eng") {
        generalSituationGet("eng");
        forecastPeriodGet("eng");
        forecastGet("eng");
    }
    else if (lang == "chi") {
        generalSituationGet("chi");
        forecastPeriodGet("chi");
        forecastGet("chi");
    }
    else {
        alert("Error. Please contact developer.");
    }
}

initializeHomeBar("eng");
