let value = document.getElementById('value');
let city  = document.getElementById('city');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let temprature = document.getElementById('temprature');
let pressure = document.getElementById('pressure');
let description = document.querySelector('.description');

let form = document.querySelector('form'); 
let main = document.querySelector('main');


let id  = '933a765113b0de68c0f7b2e793eb951d'
let url =  'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

form.addEventListener('submit',(e) => {
    e.preventDefault();
    if(value.value != ''){
        searchWeather()
    }
})

const searchWeather = () => {
    fetch(url + '&q=' + value.value)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src= 'https://flagsapi.com/'+ data.sys.country +'/shiny/32.png'

            temprature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            temprature.querySelector('figcaption span').innerText = data.main.temp;

            description.innerText = data.weather[0].description;

            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        }else {
            main.classList.add('error')

            setTimeout(() => {
                main.classList.remove('error')
            },1000)
        }

        value.value = '';
    })
}

const initiApp = () => {
    value.value = 'Delhi';
    searchWeather()
}

initiApp()