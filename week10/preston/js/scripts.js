function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

document.getElementById('last').textContent = document.lastModified;

var d = new Date();
if (d.getDay() == 5) {
    alert("Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.");
}

//weather blurb below

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ebb6dc23c3a5e521b7977dbc0df05103&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const temperature = document.querySelector('#temperature');
        temperature.textContent = jsObject.main.temp;
        humidity.textContent = jsObject.main.humidity;
        ws.textContent = jsObject.wind.speed;
        currently.textContent = jsObject.weather[0].description;

        wc.textContent = String(Number(jsObject.main.temp) - (Number(jsObject.wind.speed) * .7));

        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        const rn = jsObject.weather[0].description;
        rn.textContent = jsObject.weather[0].description;

        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);

    });

    //5 day forcast below

let cityID = 5604473;
let appid = 'ebb6dc23c3a5e521b7977dbc0df05103';
const apiURLf = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&APPID=${appid}`;

fetch(apiURLf)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
       var shortlist = jsObject.list.filter()

   
        for (x = 0; x >= 40; x++) {
            jsObject.list.filter
        }

        //loop through each of the forecast days


        let d = new Date(jsObject.list[4].dt_txt);
        console.log(d);
        
        thefive.forEach( x => {

        let d = new Date(x.dt_txt);

            document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
            day++
        });
    });