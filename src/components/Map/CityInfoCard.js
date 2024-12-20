import React from "react";
import "./style.css";
import appData from "./appData";

export default function CityInfoCard(props) {
  const stateData = appData.pointsData.find(
    (data) => data.state === props.state
  );

  if (!stateData) {
    return null; // No data for this state
  }

  // Determine marker type based on conditions
  const isSquareMarker =
    stateData.image !== "" && stateData.vimeoVideo === "";

  return (
    <div
      className={`card-container d-flex flex-wrap ${
        isSquareMarker ? "square-marker" : ""
      }`}
      style={{
        position: "absolute",
        transform: stateData.translateProp, // Adjust this as needed
      }}
    >
      <div
        className="card"
        style={{
          flex: "0 0 auto",
          margin: "10px",
          maxWidth: "320px",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        {stateData.image !== "" ? (
          <img
            className="card-img-top"
            src={stateData.image}
            alt="carddetail"
            height="150px"
          />
        ) : stateData.vimeoVideo !== "" ? (
          <iframe
            src={stateData.vimeoVideo}
            width="300"
            height="190px"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={stateData.title}
          ></iframe>
        ) : stateData.youtubeVideo !== "" ? (
          <iframe
            src={stateData.youtubeVideo}
            maxWidth="300px"
            height="190px"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Video"
          ></iframe>
        ) : (
          <></>
        )}
        <div className="card-body">
          <h5
            className="card-title"
            
          >
            {stateData.title}
          </h5>
          <p
            className="card-text"
            style={{ fontSize: props.state === "Colorado" ? "1.2rem" : "1rem" }}
          >
            {stateData.description}
          </p>
          <a href={stateData.link} target="_blank" rel="noopener noreferrer">
            <button
              style={{
                width: "100%",
                backgroundColor: "#161e44",
                height: "28px",
                color: "white",
                fontSize: "11px",
                border: "solid grey",
              }}
            >
              Learn More
            </button>
          </a>
        </div>
        <div className="tip"></div>
      </div>
    </div>
  );
}
