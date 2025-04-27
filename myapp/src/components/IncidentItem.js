// src/components/IncidentItem.jsx
import React, { useState } from "react";

function IncidentItem({ incident }) {
  const [showDetails, setShowDetails] = useState(false);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div className="incident-card">
      <img
        src={`https://picsum.photos/seed/${incident.id}/400/200`}
        alt="Incident"
        className="incident-image"
      />

      <div className="incident-content">
        <h3>{incident.title}</h3>
        <span
          className="severity-badge"
          style={{ backgroundColor: getSeverityColor(incident.severity) }}
        >
          {incident.severity}
        </span>
        <p className="date">{new Date(incident.reported_at).toLocaleDateString()}</p>

        {showDetails && (
          <p className="description">{incident.description}</p>
        )}

        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>
    </div>
  );
}

export default IncidentItem;
