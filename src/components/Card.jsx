import { DateTime } from "luxon";
import { isDay, TIME_INTERVAL } from "../utils/helpers";
import { useEffect, useState } from "react";
import "./Card.css";
import "../utils/types.js";

/*
  You need to implement the functionality to switch the color theme of the card component based on the time.
  You can do this using a util function called isDay() which has already been imported for you.

  This function accepts the time as a string (converting the time to a string has already been taken care of for you),
  as well as the object of sunrise and sunset times from the mock data.
  
  You should create an additional piece of state that stores the current value indicating whether it is daytime or not
  (by calling the isDay() function), and conditionally render the component based on this.

  Remember that the component has an interval handler to continuously update the time, so you will need to recalculate
  this variable whenever the time is updated.

  Additionally, some of the data has not been rendered from the city object. Please render the missing data as well.

  Also, write a small function for testing purposes that changes the theme of the card whenever the user clicks on the sun/moon icon on the card. Additionally, if you have time, add CSS styles to .card__icon so that:
    1 - The cursor is set to pointer
    2 - When you hover over it it increases to 1.5x size
    3 - The hover effect has a smooth transition
  
  Finally, the current implemnentation of the isDay function just returns true or false randomly. Please complete the implementation of isDay(). It is located in helpers.js
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
  // Additional state for determining whether it is daytime or not...

  const testFunction = () => {};

  useEffect(() => {
    // Interval that runs every 15 seconds and updates the current time
    const interval = setInterval(() => {
      setTime(calculateCurrentTime());
    }, TIME_INTERVAL);

    return () => {
      // Cleanup function
      clearInterval(interval);
    };
  }, []);

  return (
    // prettier-ignore
    <article className="card"> {/* You should use the card--dark class in addition to the card class to get the dark styles */}
      <span className="card__icon" onClick={testFunction}>☀️</span> {/* You conditionally render the icon as either ☀️ or 🌙 based on the time */}
      <h1 className="card__city">{city.name}</h1>
      {/* Render the the name of the country and style it using the card__country class */}
      <p className="card__time">{time}</p>
      <p className="card__temperature">{city.temperature}&deg; C</p>
    </article>
  );
};
