
if (document.title == "Preston") {
    var cityID = "5604473";
}

if (document.title == "Soda Springs") {
    var cityID = "5678757";
}

if (document.title == "Fish Haven") {
    var cityID = "4993659";
}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&unitsimperial&APPID=c7f64c4fca86e4ff703aa96a3352506b";
const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&unitsimperial&APPID=c7f64c4fca86e4ff703aa96a3352506b"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let kTemp = jsObject.main.temp;
        let fTemp = Math.round(((kTemp - 273.15) * 1.8) + 32);
        document.getElementById('speed').textContent = jsObject.wind.speed;
        document.getElementById('currently').textContent = fTemp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('imagesrc').textContent = jsObject.weather[0].main;
        var windChill = Math.round(35.75 + (0.6215 * fTemp) - (35.75 * Math.pow(jsObject.wind.speed, 0.16)) + (0.4275 * fTemp * Math.pow(jsObject.wind.speed, 0.16)));
        document.getElementById('chill').textContent = windChill;
    });

fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        var dayNum = 1;
        var imgNum = 1;
        var tempNum = 1;
        for (var i = 0; i < jsObject.list.length; i++) {
            var dateTime = jsObject.list[i].dt_txt;
            var dayOfWeek = (new Date(dateTime).toLocaleString('en-us', { weekday: 'long' }));

            var time = dateTime.includes("18:00:00");
            if (time == true) {
                document.getElementById("forDay" + dayNum).textContent = dayOfWeek;
                dayNum++;

                var imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '@2x' + '.png';
                var desc = jsObject.list[i].weather[0].description;
                document.getElementById("forImg" + imgNum).setAttribute('src', imagesrc);
                document.getElementById("forImg" + imgNum).setAttribute('alt', desc);
                imgNum++;

                var temp = Math.round(jsObject.list[i].main.temp_max);
                document.getElementById("forTemp" + tempNum).textContent = Math.round(((temp - 273.15) * 1.8) + 32) + " F";
                tempNum++;
            } else {
                continue;
            }
        }

    });