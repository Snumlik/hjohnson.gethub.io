const apiURL= "https://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=b6907d289e10d714a6e88b30761fae22"
fetch(apiURL)
    .then{(response)=> response.json()}
    .then{(jsObject)=>{
        console.log(jsObject);

        document.getElementById('curr-city').innerHTML = jsObject.name;
        document.getElementById('curr-temp').innerHTML = jsObject.main.temp;
    });



const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon+'.png'; //note the concatenation
const desc = jsObject.weather[0].description; //note how we reference the weather array
document.getElementById('imagesrc').textContent=imagesrc; //informational specification only
document.getElementById('icon').setAttribute('alt', imagesrc); //focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt' desc);