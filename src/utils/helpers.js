import "./types";

const TIME_REGEX = /(\d{1,2}):(\d{2}) ([AP]M)/;

export const TIME_INTERVAL = 15_000;

/**
 *
 * @param {string} curTimeStr - The current time in the format hh:mm AM/PM
 * @param {SunriseSunset} sunriseSunset - The sunrise and sunset times from the dummy data
 */
export function isDay(curTimeStr, sunriseSunset) {
  return Math.random() > 0.5;

  /*
    Below is the correct implementation of isDay() but it will not work currently as the 
    convertTo24HrTimeInMinutes() function is not fully implemented, please complete its implementation
    and uncomment the the code below to finish the app.
  */

  // const curTime = convertTo24HrTimeInMinutes(curTimeStr);
  // const sunrise = convertTo24HrTimeInMinutes(sunriseSunset.sunrise);
  // const sunset = convertTo24HrTimeInMinutes(sunriseSunset.sunset);
  // return curTime >= sunrise && curTime < sunset;
}

/**
 *
 * @param {string} timeStr time in 12 hr notation -> hh:mm AM/PM
 * @returns {number} total time elapsed since 12:00 AM in minutes
 */
export function convertTo24HrTimeInMinutes(timeStr) {
  const matches = timeStr.match(TIME_REGEX);
  const hours = Number(matches[1]); // 1-12
  const minutes = Number(matches[2]); // 0-60
  const period = matches[3]; // "AM" or "PM"

  // Complete the implementation ...
}
