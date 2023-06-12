var button = document.querySelector(".button");
var imputValue = document.querySelector(".imputValue");
var main = document.querySelector('.name');
var description = document.querySelector('.description');
var temprature = document.querySelector('.temprature');




button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+imputValue.value+'&appid=4ad42e2953e7e34fc026293c0648c39d')

.then(response => response.json())
.then ( data=> {
    var nameValue =data["main"];
    var tempratureValue = data["main"]["temprature"];
    var descriptionValue = data["weather"][0]["description"];

        main.innerHTML = nameValue;
        tempreture.innerHTML = tempratureValue;
        description.innerHTML = descriptionValue;
        input.value ="";

    })
.catch (err => alert("Not a locaiton"));
})

