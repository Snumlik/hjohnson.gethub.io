if (document.title == "Preston") {
    var city = "Preston";
}

if (document.title == "Soda Springs") {
    var city = "Soda Springs";
}

if (document.title == "Fish Haven") {
    var city = "Fish Haven";
}

const requestURL = 'JS/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == city) {
                let card = document.createElement('section');
                let text = document.createElement('div');
                for (let j = 0; j < towns[i].events.length; j++) {
                    let event = document.createElement('p');
                    event.textContent += towns[i].events[j];
                    text.appendChild(event);
                }

                card.appendChild(text);

                document.querySelector('p.eventInfo').appendChild(card);
            }
        }
    });