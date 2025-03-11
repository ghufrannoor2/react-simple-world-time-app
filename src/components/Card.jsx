import { DateTime } from "luxon";
import { isDay, TIME_INTERVAL } from "../utils/helpers";
import { useEffect, useState } from "react";
import "./Card.css";
import "../utils/types.js";

/*
  Task: Complete the Card Component

  - Ensure the country name is displayed along with the city name.
  - Implement the dynamic theme switching based on day/night.
  - Use the `isDay()` function to determine whether it is daytime or nighttime.
  - Clicking the sun/moon icon should toggle the theme.

  Additional styling improvements:
  - Add hover effects to `.card__icon`:
    - Make the cursor a pointer.
    - Increase size to **1.5x** on hover.
    - Ensure a smooth transition effect.
*/

/**
 * @param {{city: CityData}} props
 * @returns
 */
export const Card = ({ city }) => {
  // Function to calculate the current time
  const calculateCurrentTime = () =>
    DateTime.now().setZone(city.timezone).toLocaleString(DateTime.TIME_SIMPLE);

  // Set up the time state and calculate it initially
  const [time, setTime] = useState(calculateCurrentTime());

  // TODO: Create a state variable to track if it's day or night using isDay()

  // TODO: Implement a function that toggles the theme when clicking the icon

  useEffect(() => {
    // Interval that runs every 15 seconds and updates the current time
    const interval = setInterval(() => {
      setTime(calculateCurrentTime());

      // TODO: Update the day/night state here as well
    }, TIME_INTERVAL);

    return () => {
      // Cleanup function
      clearInterval(interval);
    };
  }, []);

  return (
    // prettier-ignore
    <article className="card">
    {/* TODO: Conditionally apply 'card--dark' class for nighttime */}

      <span className="card__icon">☀️</span>
      {/* TODO: Toggle ☀️ or 🌙 based on the time and make it clickable */}

      <h1 className="card__city">{city.name}</h1>
      {/* TODO: Render the country using an <h2> with the 'card__country' class */}

      
      <p className="card__time">{time}</p>
      <p className="card__temperature">{city.temperature}&deg; C</p>
    </article>
  );
};
