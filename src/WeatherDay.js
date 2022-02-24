import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";

class WeatherDay extends React.Component {
  render() {
    let day = this.props.day;

    return (
      <Col>
        <ListGroup className="mb-3">
          <ListGroup.Item>Forecast date: {day.date}</ListGroup.Item>
          <ListGroup.Item>
            Forecast: {day.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    );
  };
};

export default WeatherDay;