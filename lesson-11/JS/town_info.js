const requestURL = 'JS/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
                let card = document.createElement('section');
                let text = document.createElement('div');
                let name = document.createElement('h2');
                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');
                name.textContent = towns[i].name;
                motto.textContent = '"' + towns[i].motto + '"';
                year.textContent = 'Year Founded: ' + towns[i].yearFounded;
                population.textContent = 'Current Population: ' + towns[i].currentPopulation;
                rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                image.setAttribute('src', 'images/' + towns[i].photo);
                image.setAttribute('alt', towns[i].name + ' ' + towns[i].motto);

                text.appendChild(name);
                text.appendChild(motto);
                text.appendChild(year);
                text.appendChild(population);
                text.appendChild(rain);
                card.appendChild(text);
                card.appendChild(image);
                document.querySelector('div.towns').appendChild(card);
            }
        }
    });