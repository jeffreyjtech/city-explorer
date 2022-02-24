import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Weather extends React.Component {
  render() {
    let forecast = this.props.forecast;
    console.log(forecast);

    let forecastElems = forecast.map(day => ( 
      <Col>
        <ListGroup className="mb-3">
          <ListGroup.Item>Forecast date: {day.date}</ListGroup.Item>
          <ListGroup.Item>
            Forecast: {day.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    ));

    console.log(forecast)

    return (
      <Row>
        {/* <Col>
          <ListGroup className="mb-3">
            <ListGroup.Item>Forecast date: {forecast.date}</ListGroup.Item>
            <ListGroup.Item>
              Forecast: {forecast.description}
            </ListGroup.Item>
          </ListGroup>
        </Col> */}
        {forecastElems}
      </Row>
    );
  };
};

export default Weather;