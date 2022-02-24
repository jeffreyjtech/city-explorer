import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Weather extends React.Component {
  render() {
    let forecast = this.props.forecast;
    console.log('Attempting to render forecasts',forecast);

    let forecastElems = forecast.map(day => ( 
      <Col key={day.description}>
        <ListGroup className="mb-3">
          <ListGroup.Item>Forecast date: {day.date}</ListGroup.Item>
          <ListGroup.Item>
            Forecast: {day.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    ));

    return (
      <Row>
        {forecastElems}
      </Row>
    );
  };
};

export default Weather;