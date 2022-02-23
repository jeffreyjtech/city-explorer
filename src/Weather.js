import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Weather extends React.Component {
  render() {
    let forecast;
    this.props.forecast ?
      forecast = this.props.forecast :
      forecast = {datetime:'not found', description: 'not found'};

    return (
      <>
        <ListGroup className="mb-3">
          <ListGroup.Item>Forecast time: {forecast.datetime}</ListGroup.Item>
          <ListGroup.Item>
            Forecast: {forecast.description}
          </ListGroup.Item>
        </ListGroup>
        {/* {errorDisplay} */}
      </>
    );
  };
};

export default Weather;