import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index events={events} />} />
        <Route path="/create-event" element={<CreateEvent addEvent={addEvent} />} />
      </Routes>
    </Router>
  );
}

export default App;
