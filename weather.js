const apikey = "f3da051190591b93ea55d4cccaddb2e9"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const cityname = document.querySelector(".search input");

const btn = document.querySelector(".search button");


async function checkweather(city) {
    const response = await fetch(apiurl + city + "&" + `appid=${apikey}`);
    //const response=await fetch(http://api.weatherapi.com/v1/current.json?key=5470a84d254c487f8ee124110240301&q=London);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed;



}

btn.addEventListener("click", () => {






    checkweather(cityname.value);

})
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//5470a84d254c487f8ee124110240301*/