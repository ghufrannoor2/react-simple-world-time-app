import { DateTime } from "luxon";
import { isDay, TIME_INTERVAL } from "../utils/helpers";
import { useEffect, useState } from "react";
import "./Card.css";
import "../utils/types.js";

/**
 *
 * @param {{city: CityData, clickHandler: Function<void>}} props
 * @returns
 */
export const Card = ({ city, clickHandler }) => {
  const calculateCurrentTime = () =>
    DateTime.now().setZone(city.timezone).toLocaleString(DateTime.TIME_SIMPLE);

  const [time, setTime] = useState(calculateCurrentTime());
  const [isDayTime, setIsDayTime] = useState(isDay(time, city.sunriseSunset));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateCurrentTime());
      setIsDayTime(isDay(time, city.sunriseSunset));
    }, TIME_INTERVAL);

    return () => {
      // Cleanup function
      clearInterval(interval);
    };
  }, []);

  return (
    <article
      className={`card ${isDayTime ? "" : "card--dark"}`}
      onClick={clickHandler}
    >
      <span className="card__icon">{isDayTime ? "☀️" : "🌙"}</span>
      <h1 className="card__city">{city.name}</h1>
      <h2 className="card__country">{city.country}</h2>
      <p className="card__time">{time}</p>
      <p className="card__temperature">{city.temperature}&deg; C</p>
    </article>
  );
};
