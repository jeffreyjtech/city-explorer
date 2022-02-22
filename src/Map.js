import React from "react";

class Map extends React.Component {
  render() {
    return (
      <>
        <map name="primary">
        </map>
        <img usemap="#primary" src="https://via.placeholder.com/350x150" alt="350 x 150 pic" />
      </>
    );
  }
}

export default Map;