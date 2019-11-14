import React from "react"
import 'weather-icons/css/weather-icons.css'
import Weather_Component from "./AppComponent/Weather_Component"
import Form_Component from "./AppComponent/Form_Component"
import './App.css';

const API_key="1282b408f792dad20187c0ec9fadee04";

class App extends React.Component {

  constructor(){
    super();
    this.state={
      city:"city",
      country:"country",
      icon:undefined,
      main:undefined,
      celsius:"temp",
      temp_min:"min",
      temp_max:"max",
      description:"des",
      tomorrow_icon:undefined,
      tomorrowmain:undefined,
      tomorrowcelsius:"temp",
      tomorrowtemp_min:"min",
      tomorrowtemp_max:"max",
      tomorrowdescription:"des",
      weatherlist:[],
      error:false,
    };
    this.weatherIcon={
     Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-day-rain",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Cloud:"wi-day-fog",
    };
}
ConvertToCelsius(temp){
    let tp=Math.floor(temp-273.15);
    return tp;
  }
getWeather=async(e)=>{
  e.preventDefault();

  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

  console.log(city);
  console.log(country);

  if(country&&city){
  const api_call=await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)

  const api_callforecast=await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_key}`)

  const response1=await api_call.json();
  const response2=await api_callforecast.json();

  console.log(response1);
  console.log(response2);

  let id=response1.weather[0].id;

  this.setState({icon:this.weatherIcon.Cloud})  

  if(id>=200&&id<=232)
    this.setState({icon:this.weatherIcon.Thunderstorm})

  if(id>=300&&id<=321)
    this.setState({icon:this.weatherIcon.Drizzle})

  if(id>=500&&id<=531)
    this.setState({icon:this.weatherIcon.Rain})

  if(id>=600&&id<=622)
    this.setState({icon:this.weatherIcon.Snow})

  if(id>=701&&id<=781)
    this.setState({icon:this.weatherIcon.Atmosphere})

  if(id>=800)
    this.setState({icon:this.weatherIcon.Clear})

  let id2=response2.list[9].weather[0].id;

  this.setState({tomorrow_icon:this.weatherIcon.Cloud})  

  if(id2>=200&&id2<=232)
    this.setState({tomorrow_icon:this.weatherIcon.Thunderstorm})

  if(id2>=300&&id2<=321)
    this.setState({tomorrow_icon:this.weatherIcon.Drizzle})

  if(id2>=500&&id2<=531)
    this.setState({tomorrow_icon:this.weatherIcon.Rain})

  if(id2>=600&&id2<=622)
    this.setState({tomorrow_icon:this.weatherIcon.Snow})

  if(id2>=701&&id2<=781)
    this.setState({tomorrow_icon:this.weatherIcon.Atmosphere})

  if(id2>=800)
    this.setState({tomorrow_icon:this.weatherIcon.Clear})
  
  let newlist=[]

  for (let i = 0; i < 30; i+=3) {
        newlist.push(
            response2.list[i]
        );
    }

    console.log(newlist)


  this.setState({
    city:response1.name,
    country:response1.sys.country,

    celsius:this.ConvertToCelsius(response1.main.temp),
    temp_min:this.ConvertToCelsius(response1.main.temp_max),
    temp_max:this.ConvertToCelsius(response1.main.temp_min),
    description:response1.weather[0].description,
    tomorrowcelsius:this.ConvertToCelsius(response2.list[9].main.temp),
    tomorrowtemp_min:this.ConvertToCelsius(response2.list[9].main.temp_max),
    tomorrowtemp_max:this.ConvertToCelsius(response2.list[9].main.temp_min),
    tomorrowdescription:response2.list[9].weather[0].description,

    weatherlist:newlist,
  });
}else{
  this.setState({error:true})
}}

render() 
{
        return (
              <div>
              <div class="row">
              <div class="column">
                <Form_Component loadweather={this.getWeather}/>
              </div>

              <div class="column">
                <Weather_Component 
                  city={this.state.city} country={this.state.country}

                  celsius={this.state.celsius}
                  temp_min={this.state.temp_min}
                  temp_max={this.state.temp_max}
                  description={this.state.description}
                  weatherIcon={this.state.icon}

                  tomorrowCelsius={this.state.tomorrowcelsius}
                  tomorrowTemp_min={this.state.tomorrowtemp_min}
                  tomorrowTemp_max={this.state.tomorrowtemp_max}
                  tomorrowDescription={this.state.tomorrowdescription}
                  tomorrowWeathericon={this.state.tomorrow_icon}

                  weatherlist={this.state.weatherlist}
                  />
              </div>
            </div>
          </div>
        )
    };
  }

export default App



