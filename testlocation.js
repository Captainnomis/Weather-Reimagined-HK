const weatherStations = [
    {"place": "Wan Chai", "latitude": 22.2889, "longitude": 114.1748},
    {"place": "Yuen Long Park", "latitude": 22.4409, "longitude": 114.0194},
    {"place": "Yau Tsim Mong", "latitude": 22.3116, "longitude": 114.1707},
    {"place": "Sham Shui Po", "latitude": 22.3358, "longitude": 114.1625},
    {"place": "Kowloon City", "latitude": 22.3217, "longitude": 114.1914},
    {"place": "Wong Tai Sin", "latitude": 22.3406, "longitude": 114.1972},
    {"place": "Kwun Tong", "latitude": 22.3133, "longitude": 114.2243},
    {"place": "King's Park", "latitude": 22.3167, "longitude": 114.1717},
    {"place": "Hong Kong Observatory", "latitude": 22.3022, "longitude": 114.1746},
    {"place": "Wong Chuk Hang", "latitude": 22.2464, "longitude": 114.1739},
    {"place": "Ta Kwu Ling", "latitude": 22.5353, "longitude": 114.1786},
    {"place": "Lau Fau Shan", "latitude": 22.4809, "longitude": 113.9877},
    {"place": "Tai Po", "latitude": 22.4495, "longitude": 114.1690},
    {"place": "Sha Tin", "latitude": 22.3797, "longitude": 114.1905},
    {"place": "Tuen Mun", "latitude": 22.3897, "longitude": 113.9734},
    {"place": "Tseung Kwan O", "latitude": 22.3061, "longitude": 114.2624},
    {"place": "Sai Kung", "latitude": 22.3893, "longitude": 114.2736},
    {"place": "Cheung Chau", "latitude": 22.2065, "longitude": 114.0271},
    {"place": "Chek Lap Kok", "latitude": 22.3134, "longitude": 113.9431},
    {"place": "Tsing Yi", "latitude": 22.3485, "longitude": 114.1051},
    {"place": "Tsuen Wan Shing Mun Valley", "latitude": 22.3841, "longitude": 114.1205},
    {"place": "Hong Kong Park", "latitude": 22.2768, "longitude": 114.1622},
    {"place": "Shau Kei Wan", "latitude": 22.2839, "longitude": 114.2221},
    {"place": "Happy Valley", "latitude": 22.2691, "longitude": 114.1863},
    {"place": "Stanley", "latitude": 22.2177, "longitude": 114.2132},
    {"place": "Kai Tak Runway Park", "latitude": 22.315, "longitude": 114.214},
    {"place": "Tai Mei Tuk", "latitude": 22.5244, "longitude": 114.2302}
  ]

function calculateDistance(lat1, lon1, lat2, lon2) {
    const dx = lat1 - lat2; //straight line distance from latitude
    const dy = lon1 - lon2; //straight line distance from longitude
    return Math.sqrt(dx * dx + dy * dy); //Pythagorean theorem to calculate the straight line distance
}

//let me try to interpet the code below
function findNearestStation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => { //get the current position first
            const userLat = position.coords.latitude; //Lat equals to latitude
            const userLon = position.coords.longitude; //Lon equals to longitude
            let nearestStation = null; //initially set nearestStation to null
            let minDistance = Infinity; //initially set minDistance to infinity such that all stations will be <minDistance as start
            let allStations = []; //har tf i use this for

            weatherStations.forEach(station => { //do this for each station in the JSON above
                const distance = calculateDistance(userLat, userLon, station.latitude, station.longitude); //calculate distance using formula above
                allStations.push({ ...station, distance: distance }); //add the station to allStations array with distance property

                if (distance < minDistance) {
                    minDistance = distance; //update minDistance
                    nearestStation = station; //update nearestStation
                }
            });

            // Sort all stations by distance (closest first)
            allStations.sort((a, b) => a.distance - b.distance);

            // Display results
            displayResults(userLat, userLon, nearestStation, minDistance, allStations);
        });
    }
}

function displayResults(userLat, userLon, nearestStation, minDistance, allStations) {
            let html = `
                <h3>📍 Your Location</h3>
                <p>Latitude: ${userLat.toFixed(6)}<br>
                Longitude: ${userLon.toFixed(6)}</p>
                
                <h3>🏆 Nearest Weather Station</h3>
                <div style="background: #e6f7ff; padding: 15px; border-radius: 5px; border-left: 4px solid #1890ff;">
                    <strong>${nearestStation.place}</strong><br>
                    Distance: ${minDistance.toFixed(6)}<br>
                    Coordinates: ${nearestStation.latitude}, ${nearestStation.longitude}
                </div>
                
                <h3>📊 All Stations (Sorted by Distance)</h3>
            `;
            
            allStations.forEach((station, index) => {
                const isNearest = station.place === nearestStation.place;
                html += `
                    <div class="station" style="${isNearest ? 'border-left: 4px solid #52c41a; background: #f6ffed;' : ''}">
                        ${index + 1}. <strong>${station.place}</strong> 
                        ${isNearest ? ' 👑' : ''}<br>
                        <small>Distance: ${station.distance.toFixed(6)} | 
                        Coordinates: ${station.latitude}, ${station.longitude}</small>
                    </div>
                `;
            });
            
            document.getElementById('result').innerHTML = html;
        }