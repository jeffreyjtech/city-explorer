import React from "react";

class Map extends React.Component {
  render() {
    let locationName = this.props.locationData.display_name;
    let locationLat = this.props.locationData.lat;
    let locationLong = this.props.locationData.lon;
    let locationImg = `https://maps.locationiq.com/v3/staticmap?key=pk.aae4ebad58d64972ad596da5d8868504&center=${locationLat},${locationLong}&zoom=8`

    return (
      <>
        <ul>
          <li>City Name: {locationName}</li>
          <li>Lat: {locationLat}</li>
          <li>Long: {locationLong}</li>
        </ul>
        <img useMap="#primary" src={locationImg} alt="{this.props.locationData.display_name}" />
        <map name="primary" />
      </>
    );
  }
}

export default Map;