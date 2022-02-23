import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Weather extends React.Component {
  render() {
    let forecast;
    this.props.forecast ?
      forecast = this.props.forecast :
      forecast = {datetime:'not found', description: 'not found'};

    let error = this.props.forecastError;

    let errorDisplay = (<div/>);
    if(error) {
      console.log('Trying to display error:',error)
      if(error.response) {
        if (error.response.data.message === 'Weather data not found') {
          errorDisplay = (
            <p className="bg-danger text-warning rounded p-1 mt-2">
              Encountered error: <code>{error.response.data.message}</code>.
            </p>
          );
        }
      } else {       
        errorDisplay = (
          <p className="bg-danger text-warning rounded p-1 mt-2">
            Encountered error: <code>{error.message}</code>. Try again.
          </p>
        );
      } 
    }

    return (
      <>
        <ListGroup className="mb-3">
          <ListGroup.Item>Forecast time: {forecast.date}</ListGroup.Item>
          <ListGroup.Item>
            Forecast: {forecast.description}
          </ListGroup.Item>
        </ListGroup>
        {errorDisplay}
      </>
    );
  };
};

export default Weather;