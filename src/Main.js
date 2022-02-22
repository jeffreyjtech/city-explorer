import React from "react";
import axios from "axios";

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

import Map from "./Map"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      error: ''
    };
  }

  requestData = async (searchTerms) => {
    try {
      let locationIQData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${searchTerms}&format=json`);
      this.setState({
        locationData: locationIQData.data[0],
        error: ''
      })
    } catch (error) {
      this.setState({
        error: error
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.requestData(e.target[0].value);
  }

  render() { 
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
          <Map 
            locationData={this.state.locationData}
            error={this.state.error} 
          />
        </main>
    );
  }
}

export default Main;