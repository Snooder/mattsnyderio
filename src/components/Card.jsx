import React, { useState } from "react";

const Card = ({ image, title, location, date, longDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: "100%",
    height: "500px",
    perspective: "1000px",
    marginBottom: "20px",
    position: "relative",
  };

  const cardInnerStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const commonSideStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    borderRadius: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const frontStyle = {
    ...commonSideStyle,
    backgroundColor: "white",
  };

  const backStyle = {
    ...commonSideStyle,
    backgroundColor: "#f8f9fa",
    color: "black", // Black text on the back
    transform: "rotateY(180deg)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
  };

  const cardImageStyle = {
    width: "100%",
    height: "80%", // 75% height for the image
    objectFit: "cover",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  };

  const descriptionContainerStyle = {
    height: "20%", // 25% height for the description
    padding: "10px",
    textAlign: "center",
    fontSize: "1rem",
    color: "#333",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    backgroundColor: "#f1f1f1",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={cardInnerStyle}>
        {/* Front of the card */}
        <div style={frontStyle}>
          <img src={image} alt="event" style={cardImageStyle} />
          <div style={descriptionContainerStyle}>
            <p className="font-bold">{title}</p>
            <p>{location}</p>
            <p>{date}</p>
          </div>
        </div>

        {/* Back of the card */}
        <div style={backStyle}>
          <p>{longDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
