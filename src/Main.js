import React from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Map from "./Map";
import Weather from "./Weather";
import Error from "./Error";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      errors: {},
      forecast: {},
    };
  }

  requestData = async (searchTerms) => {
    try {
      let locationIQData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${searchTerms}&format=json`);
      this.setState({
        locationData: locationIQData.data[0],
        errors: {...this.state.errors, locationError: null}
      })
    } catch (error) {
      this.setState({
        errors: {...this.state.errors, locationError: error}
      })
    }

    // This try-catch block is a placeholder weather request
    try {
      let weather = await axios.get(`http://localhost:3001/weather?searchQuery=${searchTerms}`);
      console.log(weather);

      this.setState({
        forecast: weather.data[0],
        errors: {...this.state.errors, forecastError: null}
      })
    } catch (error) {
      console.log('Weather error',error);
      this.setState({
        forecast: {},
        errors: {...this.state.errors, forecastError: error}
      })
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.requestData(e.target[0].value);
  }

  render() { 
    console.log('Current error state:',this.state.errors)
    return (
        <main className="main m-3 p-3 rounded" style={{maxWidth: "1440px"}}>
          <Form className="w-25 mb-3" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="cityInput" className="rounded p-1">
                Enter location name
              </Form.Label>
              <Form.Control
                id="cityInput"
                type="text"
                placeholder="Nowheresville"
              />
              <Button 
                type="submit" 
                className="mt-3"
                variant="info"
              >
                Explore!
              </Button>
            </Form.Group>
          </Form>
          <Error 
            errors={this.state.errors}
          />
          <Weather
             forecast={this.state.forecast}
          />
          <Map 
            locationData={this.state.locationData}
          />
        </main>
    );
  }
}

export default Main;