// src/components/IncidentList.jsx
import React from "react";
import IncidentItem from "./IncidentItem";

function IncidentList({ incidents }) {
  return (
    <div className="incident-list">
      {incidents.length === 0 ? (
        <p>No incidents found.</p>
      ) : (
        incidents.map((incident) => (
          <IncidentItem key={incident.id} incident={incident} />
        ))
      )}
    </div>
  );
}

export default IncidentList;
