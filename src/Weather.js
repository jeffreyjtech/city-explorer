import React from 'react';

// import ListGroup from "react-bootstrap/ListGroup";
import Row from 'react-bootstrap/Row';
// import Col from "react-bootstrap/Col";
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    let forecasts = this.props.forecasts;
    let forecastElems = [];

    if (forecasts[0].date) {
      forecastElems = forecasts.map((day) => (
        <WeatherDay key={day.description + day} day={day} />
      ));
    }

    return <Row>{forecastElems}</Row>;
  }
}

export default Weather;
