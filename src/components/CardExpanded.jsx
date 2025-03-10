import { DateTime } from "luxon";
import { isDay, TIME_INTERVAL } from "../utils/helpers";
import { useEffect, useState } from "react";
import "./Card.css";
import "../utils/types.js";

/**
 *
 * @param {{city: CityData; onClose: Function<void>}} props
 */
export const CardExpanded = ({ city, onClose }) => {
  const calculateCurrentTime = () =>
    DateTime.now().setZone(city.timezone).toLocaleString(DateTime.TIME_SIMPLE);

  const [time, setTime] = useState(calculateCurrentTime());
  const [isDayTime, setIsDayTime] = useState(isDay(time, city.sunriseSunset));

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setTime(calculateCurrentTime());
      setIsDayTime(isDay(time, city.sunriseSunset));
    }, TIME_INTERVAL);

    return () => {
      // Cleanup function
      clearInterval(interval);
    };
  }, []);

  const testTimeShift = () => {
    if (interval) clearInterval(interval);
    setIsDayTime((curVal) => !curVal);
  };

  return (
    <div className="card__backdrop">
      <article
        className={`card card--expanded ${isDayTime ? "" : "card--dark"}`}
      >
        <span className="card__icon" onClick={testTimeShift}>
          {isDayTime ? "☀️" : "🌙"}
        </span>
        <h1 className="card__city">{city.name}</h1>
        <h2 className="card__country">{city.country}</h2>
        <p className="card__time">{time}</p>
        <p className="card__temperature">{city.temperature}&deg; C</p>
        <p className="card__sunrise">{city.sunriseSunset.sunrise} 🌄</p>
        <p className="card__sunrise">{city.sunriseSunset.sunset} 🌇</p>
        <p className="card__sunrise">{city.timezone} 🌍</p>
        <button
          className={`btn ${isDayTime ? "" : "btn--dark"}`}
          type="button"
          onClick={onClose}
        >
          close
        </button>
      </article>
    </div>
  );
};
