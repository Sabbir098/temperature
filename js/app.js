const API_KEY = `f9db9cdeed395d7dec997b91d5f87e55`;
const searchTemperature = () => {
    const city = document.getElementById('city-name');
    const cityField = city.value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityField}&units=metric&appid=${API_KEY}`
    
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
    
    city.value = '';
}

const setInnerText = (id, text) =>{
    document.getElementById(id, text).innerText = text
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name)
    setInnerText('temp', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('img-icon');
    imgIcon.setAttribute('src', url)
    // console.log(temperature);
}