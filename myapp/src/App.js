// src/App.jsx
import React, { useState } from "react";
import { mockIncidents } from "./data/mockIncidents";
import IncidentList from "./components/IncidentList";
import IncidentForm from "./components/IncidentForm";
import "./App.css";

function App() {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const filteredIncidents = incidents
    .filter((incident) => (filter === "All" ? true : incident.severity === filter))
    .sort((a, b) => {
      if (sortOrder === "Newest") {
        return new Date(b.reported_at) - new Date(a.reported_at);
      } else {
        return new Date(a.reported_at) - new Date(b.reported_at);
      }
    });

  const addIncident = (incident) => {
    setIncidents([incident, ...incidents]);
  };

  return (
    <div className="App">
      <div className="background-overlay"></div> {/* NEW BACKGROUND OVERLAY */}
      
      <header className="header">
        <h1>AI Safety Incident Dashboard</h1>
        <p>Tracking incidents to improve AI systems 🌐</p>
      </header>

      <div className="controls">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      <IncidentForm onAddIncident={addIncident} />
      <IncidentList incidents={filteredIncidents} />

      <footer className="footer">
        <p>Made with ❤️ for safer AI</p>
      </footer>
    </div>
  );
}

export default App;
