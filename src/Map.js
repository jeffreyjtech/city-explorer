import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Image from "react-bootstrap/Image";

class Map extends React.Component {
  render() {
    let locationName = this.props.locationData.display_name;
    let locationLat = this.props.locationData.lat;
    let locationLong = this.props.locationData.lon;
    let error = this.props.locationError;
    let apiKey = process.env.REACT_APP_LOCATIONIQ_API_KEY;
    
    let locationImg = (locationName === undefined) ?
      `https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=0,0&zoom=1` :
      `https://maps.locationiq.com/v3/staticmap?key=${apiKey}&center=${locationLat},${locationLong}&zoom=8`;

    return (
      <>
        <ListGroup>
          <ListGroup.Item>Location: {locationName}</ListGroup.Item>
          <ListGroup.Item>Lat: {locationLat}</ListGroup.Item>
          <ListGroup.Item>Long: {locationLong}</ListGroup.Item>
        </ListGroup>
        <div className="text-center">
          <Image
            className="rounded-circle w-100 m-auto mt-3"
            style={{maxWidth: "61vh"}}
            useMap="#primary" 
            src={locationImg} 
            alt="{this.props.locationData.display_name}"
          />
        </div>
        <map name="primary" />
      </>
    );
  };
};

export default Map;