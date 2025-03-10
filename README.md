# Task: City Time Cards with Day/Night Visualization

## Objective

Create a responsive application that displays cards for different cities around the world, showing their current time and visualizing whether it's day or night in each location.

## Requirements

1. Create a UI with the following elements:

   - A grid of city cards (minimum 4 cities across different time zones)
   - Each card should display:
     - City name and country
     - Current local time (updating in real-time)
     - Visual indication of day/night status
     - Current temperature (use provided mock data)
   - A button to add a new city from a dropdown list

2. Functionality:

   - Time should update every minute (or more frequently)
   - Day/night visualization should be based on sunrise/sunset times for each city
   - Background or visual elements should change based on day/night status
   - Clicking on a city card should expand it to show more details (weather conditions, timezone info, etc.)

3. Design:
   - Create a clean, modern interface with appropriate visual cues
   - Use animations or transitions for day/night state changes
   - Ensure the UI is responsive and looks good on mobile devices
   - Use appropriate iconography for weather and time indicators

## Mockup

```
 ┌──────────────────────────────────────────────┐
 │     ┌─────────────┐     ┌─────────────┐      │
 │     │ 🌙          │     │ ☀️          │      │
 │     │ New York    │     │ London      │      │
 │     │ USA         │     │ UK          │      │
 │     │             │     │             │      │
 │     │ 1:45 AM     │     │ 6:45 AM     │      │
 │     │ 5°C         │     │ 11°C        │      │
 │     └─────────────┘     └─────────────┘      │
 │                                              │
 │     ┌─────────────┐     ┌─────────────┐      │
 │     │ ☀️          │     │ 🌙          │      │
 │     │ Tokyo       │     │ Sydney      │      │
 │     │ Japan       │     │ Australia   │      │
 │     │             │     │             │      │
 │     │ 2:45 PM     │     │ 4:45 PM     │      │
 │     │ 20°C        │     │ 25°C        │      │
 │     └─────────────┘     └─────────────┘      │
 └──────────────────────────────────────────────┘
```

## Expanded Card View (when clicked)

```
 ┌─────────────────────────────────────────────────┐
 │ ☀️                                               │
 │ London, UK                                      │
 │                                                 │
 │ Current Time: 6:45 AM                           │
 │ Temperature: 52°F                               │
 │ Weather: Partly Cloudy                          │
 │ Sunrise: 5:12 AM                                │
 │ Sunset: 8:45 PM                                 │
 │ Timezone: GMT+0                                 │
 │                                                 │
 │                     [Close]                     │
 └─────────────────────────────────────────────────┘
```

## Sample Data

```javascript
// Sample data for city cards
const cityData = [
  {
    id: 1,
    name: "New York",
    country: "USA",
    timezone: "America/New_York",
    temperature: 5,
    sunriseSunset: {
      sunrise: "6:15 AM",
      sunset: "7:30 PM",
    },
  },
  {
    id: 2,
    name: "London",
    country: "UK",
    timezone: "Europe/London",
    temperature: 11,
    sunriseSunset: {
      sunrise: "5:12 AM",
      sunset: "8:45 PM",
    },
  },
  {
    id: 3,
    name: "Tokyo",
    country: "Japan",
    timezone: "Asia/Tokyo",
    temperature: 20,
    sunriseSunset: {
      sunrise: "4:30 AM",
      sunset: "6:15 PM",
    },
  },
  {
    id: 4,
    name: "Sydney",
    country: "Australia",
    timezone: "Australia/Sydney",
    temperature: 25,
    sunriseSunset: {
      sunrise: "6:30 AM",
      sunset: "7:45 PM",
    },
  },
  {
    id: 5,
    name: "Dubai",
    country: "UAE",
    timezone: "Asia/Dubai",
    temperature: 33,
    sunriseSunset: {
      sunrise: "5:45 AM",
      sunset: "7:00 PM",
    },
  },
  {
    id: 6,
    name: "Rio de Janeiro",
    country: "Brazil",
    timezone: "America/Sao_Paulo",
    temperature: 28,
    sunriseSunset: {
      sunrise: "5:50 AM",
      sunset: "6:30 PM",
    },
  },
];
```

## Evaluation Criteria

- Accurate implementation of time calculations across different timezones
- Creative and effective day/night visualization
- Clean, well-organized React component structure
- Proper state management
- Responsive design and thoughtful UI/UX
- Smooth transitions and animations
- Code organization and maintainability

## Notes

- You may expand upon the provided data with additional details if needed
- Focus on the visual representation of day vs. night
- You can use any UI library or create your own components
