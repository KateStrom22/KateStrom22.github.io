function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

//document.getElementById('last').textContent = document.lastModified;

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
//const requestURL = 'data.json';
//change to httpS for it to work uploaded, but for it to run local has to be only http

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) { 

            let square = document.createElement('section');
            let name = document.createElement('h2');
            let photo = document.createElement('img');
            let yearFounded = document.createElement('li');
            let currentPopulation = document.createElement('li');
            let averageRainfall = document.createElement('li');
            let events = document.createElement('li');
            let text = document.createElement('div');
            
            
            name.textContent = towns[i].name;
            photo.setAttribute('src', towns[i].photo);
            yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
            currentPopulation.textContent = "Current Population: " + towns[i].currentPopulation;
            averageRainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
            events.textContent = "Events: " + towns[i].events;

            text.appendChild(name);
            square.appendChild(photo);
            text.appendChild(yearFounded);
            text.appendChild(currentPopulation);
            text.appendChild(averageRainfall);
            text.appendChild(events);
            square.appendChild(text);
            document.querySelector('div.towns').appendChild(square);
            //document.querySelectorAll('div.cards').lastname

        // temporary checking for valid response and data parsing
    };
  });
