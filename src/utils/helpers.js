import "./types";

const TIME_REGEX = /(\d{1,2}):(\d{2}) ([AP]M)/;

export const TIME_INTERVAL = 15_000;

/*
  Task: Implement Time-Based Theme Switching

  - The `isDay()` function determines whether it is daytime or nighttime.
  - Currently, `isDay()` returns `true` or `false` randomly.
  - The correct implementation is already provided but is commented out.
  - You need to complete `convertTo24HrTimeInMinutes()` to make `isDay()` functional.
*/

/**
 * Determines whether the given time falls within the day or night period.
 * @param {string} curTimeStr - The current time in hh:mm AM/PM format.
 * @param {SunriseSunset} sunriseSunset - The sunrise and sunset times from the city data.
 * @returns {boolean} - `true` if it is daytime, `false` otherwise.
 */
export function isDay(curTimeStr, sunriseSunset) {
  return Math.random() > 0.5;

  /*
    Correct Implementation (Currently Commented Out):

    - This function determines whether the current time falls between sunrise and sunset.
    - It depends on `convertTo24HrTimeInMinutes()`, which is currently incomplete.
    - Once `convertTo24HrTimeInMinutes()` is implemented, uncomment the following lines.
  */

  // const curTime = convertTo24HrTimeInMinutes(curTimeStr);
  // const sunrise = convertTo24HrTimeInMinutes(sunriseSunset.sunrise);
  // const sunset = convertTo24HrTimeInMinutes(sunriseSunset.sunset);
  // return curTime >= sunrise && curTime < sunset;
}

/**
 * Converts a 12-hour formatted time string (hh:mm AM/PM) to the total minutes elapsed since 12:00 AM.
 * @param {string} timeStr - Time in 12-hour notation (e.g., "5:30 PM").
 * @returns {number} - The number of minutes since midnight.
 */
export function convertTo24HrTimeInMinutes(timeStr) {
  const matches = timeStr.match(TIME_REGEX);
  const hours = Number(matches[1]); // 1-12
  const minutes = Number(matches[2]); // 0-59
  const period = matches[3]; // "AM" or "PM"

  // TODO: Complete the logic to correctly convert to 24-hour format
}
