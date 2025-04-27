import React, { useState } from "react";
import "./IncidentList.css";

const IncidentList = ({ incidents }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="incident-list">
      {incidents.map((incident) => (
        <div
          key={incident.id}
          className={`incident-card ${expandedId === incident.id ? "expanded" : ""}`}
          onClick={() => toggleDetails(incident.id)}
        >
          <h3>{incident.title}</h3>
          <p className="severity">Severity: {incident.severity}</p>
          <p className="date">Reported on: {new Date(incident.reported_at).toLocaleDateString()}</p>
          {expandedId === incident.id && (
            <div className="incident-details">
              <p>{incident.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default IncidentList;
