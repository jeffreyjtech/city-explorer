import React from "react";

class Map extends React.Component {
  render() {
    let locationImg = 'https://via.placeholder.com/350x150';
    let locationName = this.props.locationData.display_name;
    let locationLat = this.props.locationData.lat;
    let locationLong = this.props.locationData.lon;

    return (
      <>
        <ul>
          <li>City Name: {locationName}</li>
          <li>Lat: {locationLat}</li>
          <li>Long: {locationLong}</li>
        </ul>
        <img useMap="#primary" src={locationImg} alt="350 x 150 pic" />
        <map name="primary">
        </map>
      </>
    );
  }
}

export default Map;