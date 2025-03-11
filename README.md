# Intern Coding Task

## Overview

Welcome to the intern coding challenge! Your task is to complete the unfinished implementation of a **world city time display application**. This application fetches city data and dynamically displays the time and temperature for various locations.

## Setup Instructions

To run the project locally, follow these steps:

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

## Main Tasks (Priority)

These are the core tasks you need to complete first:

### 1. Render City Data in `App.jsx`

- The `CITY_DATA` list is provided in `data.js`.
- Your task is to render each city using the `Card` component.
- Ensure that each city’s data is displayed correctly.

### 2. Implement Dynamic Day/Night Theme in `helpers.js`

- Use the `isDay` function from `helpers.js` to determine whether it is daytime or nighttime.
- Create a state variable to store whether it is daytime or not.
- Conditionally apply the `card--dark` class for nighttime.
- Display the sun ☀️ or moon 🌙 icon based on the current time.
- Clicking the icon should toggle the theme.

### 3. Display the Country in `Card.jsx`

- The `Card` component currently does not display the country name.
- Modify it to show the country in a visually appropriate manner.

## Optional/Bonus Tasks

If you complete the main tasks quickly, consider these additional improvements:

### 1. Add Hover Effects to `.card__icon`

- Improve the UI by adding styles to `.card__icon`:
  - Make the cursor a pointer.
  - Increase size to **1.5x** when hovered.
  - Ensure a smooth transition effect.

### 2. Fix the Implementation of `isDay()`

- The `isDay()` function currently returns `true` or `false` randomly.
- The correct implementation of `isDay()` is already present in the function but is currently commented out.
- It depends on `convertTo24HrTimeInMinutes`, which has not been fully implemented.
- Complete `convertTo24HrTimeInMinutes`, then uncomment and use the correct `isDay()` logic.
- Test that your implementation is correct by running:
  ```sh
  npm run test
  ```
