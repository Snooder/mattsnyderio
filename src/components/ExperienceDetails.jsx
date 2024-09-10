import React from "react";

const ExperienceDetails = ({ details }) => {
  const listItemStyle = {
    marginBottom: "10px",
    fontSize: "1.5rem", // Increased font size
    color: "slategray",
  };

  return (
    <ul>
      {details?.map((detail, index) => (
        <li key={`experience-detail-${index}`} style={listItemStyle}>
          {detail || "No details available"}
        </li>
      )) || <li>No details available</li>}
    </ul>
  );
};

export default ExperienceDetails;
