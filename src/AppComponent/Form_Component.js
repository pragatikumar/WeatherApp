import React from "react"
import 'weather-icons/css/weather-icons.css'
import Weather_Component from "./Weather_Component"

function Form(props)
{
		return(
			<div>
			<form className= "inputstyle" onSubmit={props.loadweather}>
        <div className="row">
				<div className="col-md-10 offset-md-5">
        			<input type="text" 
               className="form-control"
               placeholder="City" 
               name="city"/>
         </div>
         <div className="col-md-10">
         			<input type="text" 
              className="form-control" 
              placeholder="Country" 
              name="country"/> 
      	 </div>
         <div className="col-md-3 mt-md-0 mt-3 text-md-left">
         <button type="submit" className="btn btn-default">Get Weather</button>
         </div>  
         </div>
         </form>
        
         </div>
		)
}
export default Form
