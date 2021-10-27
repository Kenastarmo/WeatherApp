window.addEventListener('load',()=>{
    const APIKEY='fea19a9b9128fa7b5c84cfc25bbd721f';
    const urlAPI=(location)=>`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}`

    async function getWeatherByLocation(location){
        const response = await fetch(urlAPI(location));
        const resData = await response.json();
        //console.log(resData,ConvertKelvinToCelsius(resData.main.temp));

        addWeatherToWebpage(resData);
        addDescription(resData);
        addIcon(resData);
    }

    const temperature = document.querySelector(".degree");
    const timezoneLocation = document.querySelector(".timezone-location");
    const temperatureDescription = document.querySelector(".temperature-description");
    const ikona = document.querySelector(".icon");
    const forma = document.querySelector("form");
    const search = document.querySelector("input");

    function ConvertKelvinToCelsius(K){
        return Math.floor(K - 273.15);
    }

    function addWeatherToWebpage(data){
        const temp = ConvertKelvinToCelsius(data.main.temp)
        temperature.innerHTML = temp + " °C";
    }

    function addDescription(data){  
        const deskripcija = data.weather[0].main;
        temperatureDescription.innerHTML = deskripcija;
    }
    function addIcon(data){
        const icon = data.weather[0].icon;
        ikona.innerHTML = `<img src="https://www.openweathermap.org/img/w/${data.weather[0].icon}.png" class="ikona" />`;
    }
    forma.addEventListener('submit',(e) => {
        e.preventDefault();

        const lokacija = search.value;

        if(lokacija)
        {
            getWeatherByLocation(lokacija);
        }
        timezoneLocation.innerHTML = lokacija;
        search.value = "";
    })
 })
            


     
      
       
          
     