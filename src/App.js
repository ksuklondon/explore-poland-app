import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import tours from "./data.js";
import Tours from "./Tours";

function App() {
  const [loading, setLoading] = useState(false);
  const [polandtours, setPolandtours] = useState(tours);

  const removeTour = (id) => {
    const newTours = polandtours.filter((tour) => tour.id !== id);
    setPolandtours(newTours);
  };

  const refreshTours = () => {
    setPolandtours(tours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (polandtours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={refreshTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={polandtours} removeTour={removeTour} />
    </main>
  );
}

export default App;
