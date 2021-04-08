function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

document.getElementById('last').textContent = document.lastModified;

var d = new Date();
if (d.getDay() == 5) {
    alert("Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.");
}



const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ebb6dc23c3a5e521b7977dbc0df05103&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const temperature = document.querySelector('#temperature');
        temperature.textContent = jsObject.main.temp;

        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);

    });

    