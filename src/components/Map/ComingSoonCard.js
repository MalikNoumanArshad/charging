import "./style.css";
import appData from "./appData";

export default function CityInfoCard(props) {
  const stateData = appData.pointsData.find(
    (data) => data.state === props.state
  );

  if (!stateData) {
    return null; // No data for this state
  }

  return (
    <div
      className="card-container d-flex flex-wrap"
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
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              color: "#E89725",
              fontWeight: "bold",
              fontSize: "15px",
              color: "#161e44",
            }}
          >
            {stateData.title}
          </h5>
          <p
            className="card-text"
            style={{ fontSize: props.state == "Colorado" ? "1.2rem" : "1rem" }}
          >
            {stateData.description}
          </p>
        </div>
        <div className="tip"></div>
      </div>
    </div>
  );
}
