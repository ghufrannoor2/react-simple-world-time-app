import "./App.css";
import { Card } from "./components/Card";
import { CITY_DATA } from "./utils/data";
import "./utils/types";

/*
  We have an app for displaying cities with their current time and temperature. However, the app in unfinished.
  We would like you to implement to the remaining features and finish the app for us.
*/

function App() {
  return (
    <main className="container">
      {/* Uncomment the following to see how the cards will look in their different states */}
      {/* <article className="card">
          <span className="card__icon">☀️</span>
          <h1 className="card__city">Edmonton</h1>
          <h2 className="card__country">Canada</h2>
          <p className="card__time">3:25 PM</p>
          <p className="card__temperature">-2&deg; C</p>
        </article>
        <article className="card card--dark">
          <span className="card__icon">🌙</span>
          <h1 className="card__city">Cairo</h1>
          <h2 className="card__country">Egypt</h2>
          <p className="card__time">11:25 PM</p>
          <p className="card__temperature">19&deg; C</p>
        </article> */}

      { // prettier-ignore

        /*
        The data for each of the cities is in a variable called CITY_DATA, which is a list of objects,
        each of which contains info about a city. You can find the list in utils/data.js
        
        Your job is to render each item in that list using the Card component.

        The card component takes only one prop:
          1) city - These are the items in the CITY_DATA list. You must render these use the Card component.
        */

        }
      {CITY_DATA.map((city) => (
        <Card key={city.id} city={city} />
      ))}
    </main>
  );
}

export default App;
