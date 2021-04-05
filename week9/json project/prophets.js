const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) { 

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birth = document.createElement('p');
            let place = document.createElement('p');
            let image = document.createElement('img');
            
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birth.textContent = "Birth Date: " + prophets[i].birthdate;
            place.textContent = "Birth Place: " + prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', (prophets[i].name +" " +prophets[i].lastname + "-" + prophets[i].order));

            card.appendChild(h2);
            card.appendChild(birth);
            card.appendChild(place);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
            //document.querySelectorAll('div.cards').lastname

        // temporary checking for valid response and data parsing
    };
  });
