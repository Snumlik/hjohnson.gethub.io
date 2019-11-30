const apiURL= "https://api.openweathermap.org/data/2.5/weather?id=5604473&unitsimperial&APPID=c7f64c4fca86e4ff703aa96a3352506b";
fetch(apiURL)
    .then((response)=> response.json())
    .then((jsObject)=>{
        console.log(jsObject);

        document.getElementById('speed').textContent = jsObject.wind.speed;
        document.getElementById('currently').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('imagesrc').textContent = jsObject.weather[0].main;

  

   

});
