import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Image from "react-bootstrap/Image";

class Map extends React.Component {
  render() {
    let locationName = this.props.locationData.display_name;
    let locationLat = this.props.locationData.lat;
    let locationLong = this.props.locationData.lon;
    
    let locationImg = (locationName === undefined) ?
      `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=0,0&zoom=1` :
      `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${locationLat},${locationLong}&zoom=8`;

    let errorDisplay = this.props.errorMessage ?
      (<p className="bg-danger text-warning rounded p-1 mt-2">
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
        <div className="text-center">
          <Image
            className="rounded-circle w-75 m-auto mt-3"
            style={{maxWidth: "75vh"}}
            useMap="#primary" 
            src={locationImg} 
            alt="{this.props.locationData.display_name}"
          />
        </div>
        <map name="primary" />
      </>
    );
  }
}

export default Map;