function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

document.getElementById('last').textContent = document.lastModified;

const requestURL = 'http://byui-cit230.github.io/weather/data/towndata.json';
//const requestURL = 'data.json';
//const prophets = jsonObject['prophets'];



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) { 

            let town = document.createElement('section');
            let name = document.createElement('h2');
            let photo = document.createElement('img');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let events = document.createElement('p');
            
            
            name.textContent = towns[i].name + ' ' + towns[i].lastname;
            motto.textContent = "Birth Date: " + towns[i].birthdate;
            place.textContent = "Birth Place: " + towns[i].birthplace;
            photo.setAttribute('src', towns[i].imageurl);
            photo.setAttribute('alt', (towns[i].name +" " +towns[i].lastname + "-" + towns[i].order));

            town.appendChild(town);
            town.appendChild(name);
            town.appendChild(photo);
            town.appendChild(yearFounded);
            town.appendChild(averageRainfall);
            town.appendChild(events);
            document.querySelector('div.towns').appendChild(card);
            //document.querySelectorAll('div.cards').lastname

        // temporary checking for valid response and data parsing
    };
  });
