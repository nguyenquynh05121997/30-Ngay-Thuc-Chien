

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const getSearch = $('.search')

const getCity = $('.city')
const getCountry = $('.country')
const getDeg = $('.deg-text')

const getMainWeather = $('.main-weather')

const getVisibility = $('.visibility')
const getCloud = $('.cloud')
const getSun = $('.sun')

const getDate = $('.date')

let date = new Date()

getDate.innerHTML = date

console.log(date)


function setRegion(city,country) {
  getCity.innerHTML = city
  getCountry.innerHTML = country
}

function setMainWeather(deg) {
  if(deg > 40) {
    getMainWeather.innerHTML = 'HOT HOT HOT'
  }
  else if(deg > 30) {
    getMainWeather.innerHTML = 'HOT Clouds'
  }
  else if(deg > 20) {
    getMainWeather.innerHTML = 'Clouds'
  }
  else {
    getMainWeather.innerHTML = 'Lanh qua'
  }

}

function setSubWeather(visibility,cloud,sun) {
  getVisibility.innerHTML = visibility + 'm'
  getCloud.innerHTML = cloud + 'km/h'
  getSun.innerHTML = sun + 'apm'
}


let linkApi = `https://api.openweathermap.org/data/2.5/weather?q=haiphong&appid=1869de3b3a162e280d9fb81a52564df3`

let inputValue = ''
getSearch.addEventListener('change', () => {
  inputValue = getSearch.value.trim().toLowerCase()

  linkApi = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=1869de3b3a162e280d9fb81a52564df3`
  
  fetch(linkApi)
  
  .then(res => {
  return res.json()
  })
  
  .then(data => {
    setRegion(data.name,data.sys.country)
  
    let deg = Math.round(data.main.temp - 273.15)
    getDeg.innerHTML = deg + 'ºC'
    setMainWeather(deg)
    setSubWeather(data.visibility,data.wind.speed,data.wind.deg)
    console.log(data)
  })



})











    






