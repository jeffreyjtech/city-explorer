import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Image from "react-bootstrap/Image";

class Map extends React.Component {
  render() {
    let locationName = this.props.locationData.display_name;
    let locationLat = this.props.locationData.lat;
    let locationLong = this.props.locationData.lon;
    
    let locationImg = (locationName === undefined) ?
      'https://maps.locationiq.com/v3/staticmap?key=pk.aae4ebad58d64972ad596da5d8868504&center=0,0&zoom=1' :
      `https://maps.locationiq.com/v3/staticmap?key=pk.aae4ebad58d64972ad596da5d8868504&center=${locationLat},${locationLong}&zoom=8`;

    let errorDisplay = this.props.errorMessage ?
      (<p className="bg-danger text-warning rounded p-1">
        Encountered error: {this.props.errorMessage}. Try again later
      </p>) :
      ''
    return (
      <>
        <ListGroup>
          <ListGroup.Item>Location: {locationName}</ListGroup.Item>
          <ListGroup.Item>Lat: {locationLat}</ListGroup.Item>
          <ListGroup.Item>Long: {locationLong}</ListGroup.Item>
        </ListGroup>
        {errorDisplay}
        <Image
          className="rounded-circle w-100 mt-3"
          useMap="#primary" 
          src={locationImg} 
          alt="{this.props.locationData.display_name}"
        />
        <map name="primary" />
      </>
    );
  }
}

export default Map;