var button = document.getElementById("test");
var inputValue = document.querySelector(".inputValue");
var main = document.querySelector('.name');
var description = document.querySelector('.description');
var temperature = document.querySelector('.temperature');




button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e4b245f8023f51c13bc5bf3f9ee3c7c1')

.then(response => response.json())
.then ( data=> {
    var nameValue =data["name"];
    var temperatureValue = data["main"]["temprature"];
    var descriptionValue = data["weather"][0]["description"];

        main.innerHTML = nameValue;
        temperature.innerHTML = temperatureValue;
        description.innerHTML = descriptionValue;
        input.value ="";

    })
.catch (err => alert("Not a locaiton"));
})

