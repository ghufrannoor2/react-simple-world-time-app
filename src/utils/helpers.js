import "./types";

const TIME_REGEX = /(\d{1,2}):(\d{2}) ([AP]M)/;

export const TIME_INTERVAL = 15_000;

/**
 *
 * @param {string} curTimeStr
 * @param {SunriseSunset} sunriseSunset
 */
export function isDay(curTimeStr, sunriseSunset) {
  const curTime = convertTo24HrTimeInMinutes(curTimeStr);
  const sunrise = convertTo24HrTimeInMinutes(sunriseSunset.sunrise);
  const sunset = convertTo24HrTimeInMinutes(sunriseSunset.sunset);

  return curTime >= sunrise && curTime < sunset;
}

/**
 *
 * @param {string} timeStr time in 12 hr notation -> hh:mm AM/PM
 * @returns {number} total time elapsed since 12:00 AM in minutes
 */
function convertTo24HrTimeInMinutes(timeStr) {
  const matches = timeStr.match(TIME_REGEX);
  const hours = Number(matches[1]);
  const minutes = Number(matches[2]);
  const period = matches[3];

  let totalHours = 0;
  if (hours !== 12) {
    totalHours = hours;
  }
  if (period === "PM") {
    totalHours += 12;
  }
  let totalMinutes = minutes + totalHours * 60;

  return totalMinutes;
}
