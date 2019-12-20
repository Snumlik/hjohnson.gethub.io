const requestURL = 'JS/templedata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        for (let i = 0; i < temples.length; i++) {
            let card = document.createElement('section');
            let text = document.createElement('div');
            let image = document.createElement('img');
            let name = document.createElement('h2');
            let address = document.createElement('p');
            let telephone = document.createElement('p');
            let email = document.createElement('p');
            let services = document.createElement('p');
            let history = document.createElement('p');
            let ordinances = document.createElement('p');
            let sessions = document.createElement('p');
            let closures = document.createElement('p');
            name.textContent = temples[i].name;
            address.textContent = temples[i].address;
            telephone.textContent = temples[i].telephone;
            email.textContent = temples[i].email;
            services.textContent = temples[i].services;
            history.textContent = temples[i].history;
            ordinances.textContent = temples[i].ordinances;
            sessions.textContent = temples[i].sessions;
            closures.textContent = temples[i].closures;
            image.setAttribute('src', 'images/' + temples[i].image);
            image.setAttribute('alt', temples[i].name);

            card.appendChild(name);
            text.appendChild(image);
            text.appendChild(address);
            text.appendChild(telephone);
            text.appendChild(email);
            text.appendChild(services);
            text.appendChild(history);
            text.appendChild(ordinances);
            text.appendChild(sessions);
            text.appendChild(closures);
            document.querySelector('div.temples').appendChild(card);
            document.querySelector('div.temples').appendChild(text);

        }
    });