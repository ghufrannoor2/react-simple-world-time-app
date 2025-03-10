import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { CITY_DATA } from "./utils/data";
import { CardExpanded } from "./components/CardExpanded";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [cardExpanded, setCardExpanded] = useState(false);

  const onCloseExpandedCard = () => {
    setCardExpanded(false);
    setSelectedCity(null);
  };

  return (
    <>
      {cardExpanded && (
        <CardExpanded city={selectedCity} onClose={onCloseExpandedCard} />
      )}
      <main className="container">
        {CITY_DATA.map((city) => (
          <Card
            key={city.id}
            city={city}
            clickHandler={() => {
              setSelectedCity(CITY_DATA.find((it) => it.id === city.id));
              setCardExpanded(true);
            }}
          />
        ))}
      </main>
    </>
  );
}

export default App;
