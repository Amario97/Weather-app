import React from "react";
import FormattedDate from "./FormattedDate";
import Conversion from "./Conversion";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo" >
      <h1 className="Center">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.condition}</li>
      </ul>
      <div className="row">
        <div className="col-7">
          <div className="row">
            <div className="col-md-6 d-none d-md-block">
              <img src={props.data.icon} alt={props.data.condition} />
            </div>
            <div className="col-md-6 main-temp">
              <Conversion celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Feels like: {Math.round(props.data.feels)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
