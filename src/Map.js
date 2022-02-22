import React from "react";

class Map extends React.Component {
  render() {
    return (
      <>
        <p>
          City Name: Lat: Long:
        </p>
        <img useMap="#primary" src="https://via.placeholder.com/350x150" alt="350 x 150 pic" />
        <map name="primary">
        </map>
      </>
    );
  }
}

export default Map;