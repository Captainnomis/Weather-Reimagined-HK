const http = new XMLHttpRequest();
let result = document.querySelector("#result")



function findMyCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude)
        }, 
        (err) => {
            alert(err.message);
        }
    );
    } else {
        alert("Geolocation is not supported by your browser");
    }
}

findMyCoordinates();