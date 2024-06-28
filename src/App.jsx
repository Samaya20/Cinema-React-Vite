import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import { fetchCinemas } from "./utils/fetch";
import FilmList from "./components/Films/FilmList";
import "./App.css";
import Feedback from "./components/Feedbacks/Feedback";

function App() {
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState(null);

  useEffect(() => {
    const getCinemas = async () => {
      const cinemas = await fetchCinemas();
      setCinemas(cinemas);
      if (cinemas.length > 0) {
        setSelectedCinema(cinemas[0]);
      }
    };
    getCinemas();
  }, []);

  const handleCinemaChange = (event) => {
    const selectedCinemaName = event.target.value;
    const cinema = cinemas.find((cinema) => cinema.name === selectedCinemaName);
    if (cinema) {
      setSelectedCinema(cinema);
    }
  };

  return (
    <div className="App">
      <div className="site-wrapper">
        <div className="left-side">
          <Navigation
            cinemasData={cinemas}
            handleCinemaChange={handleCinemaChange}
            selectedCinema={selectedCinema}
          />
          <FilmList selectedCinema={selectedCinema} />
        </div>
        <div className="right-side">
          <Feedback selectedCinema={selectedCinema}/>
        </div>
      </div>
    </div>
  );
}

export default App;
