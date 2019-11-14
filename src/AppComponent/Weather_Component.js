import React from "react"
import 'weather-icons/css/weather-icons.css'
import Form_Component from "./Form_Component"
import App from "../App"

function Weather(props){
		console.log(props.weatherlist)
		let ct=0;
		return(
			<div>
	<div className="navigator">
  <ul className="nav nav-tabs">
    <li className="active"><a data-toggle="tab" href="#home">Today</a></li>
    <li><a data-toggle="tab" href="#menu1">Tomorrow</a></li>
    <li><a data-toggle="tab" href="#menu2">10 Days</a></li>
  </ul>
  <div class="tab-content">
    <div id="home" className="tab-pane fade in active">
      <h5 className="decorator">{props.city},{props.country}</h5>
      <h1 className="decorator">
      	<i className={`wi ${props.weatherIcon} dispay-1`}/></h1>
      <h1 className="decorator1">{props.celsius}&deg;</h1>
    {minmaxTemp(props.temp_min,props.temp_max)}
    <h1 className="decorator1">{props.description}</h1>
    </div>
    <div id="menu1" className="tab-pane fade">
      <h5 className="decorator">{props.city},{props.country}</h5>
      <h1 className="decorator">
      	<i className={`wi ${props.tomorrowWeathericon} dispay-1`}/></h1>
      <h1 className="decorator1">{props.tomorrowCelsius}&deg;</h1>
    {minmaxTemp(props.tomorrowTemp_min,props.tomorrowTemp_max)}
    <h1 className="decorator1">{props.tomorrowDescription}</h1>
    </div>
     <div id="menu2" class="tab-pane fade">
        <table>
        {props.weatherlist.map(weather => (
		  <tr>
		    <th>{ct++}.</th>
		    <th>Temp : {Math.floor(weather.main.temp-273.13)}&deg;</th>
		    <th>Min : {Math.floor(weather.main.temp_min-273.13)}&deg;</th>
		    <th>Max : {Math.floor(weather.main.temp_max-273.13)}&deg;</th>
		    <th>
		    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="icon" />
		    </th>
		  </tr>
		  ))}
		</table>
    </div>
</div>
</div>
</div>);
};

function minmaxTemp(min,max){
		return(
			<h2>
				<span className="decorator2">{min}&deg;</span>
				<span className="decorator3">{max}&deg;</span>
			</h2>
		);
};

export default Weather
