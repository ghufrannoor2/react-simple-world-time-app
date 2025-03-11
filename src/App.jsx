import "./App.css";
import { Card } from "./components/Card";
import { CITY_DATA } from "./utils/data";
import "./utils/types";

/*
  Task: Render City Data

  - The `CITY_DATA` list contains objects with city details.
  - Your task is to render each object as a `Card` component.
  - The `Card` component takes a single prop: `city`, which represents an individual city object.
*/

function App() {
  return (
    <main className="container">
      {/* Example: Light and Dark Mode Card Layouts */}
      {/* Uncomment this section to preview how cards should be styled */}

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

      {/* TODO: Render each city in CITY_DATA using the Card component */}
    </main>
  );
}

export default App;
