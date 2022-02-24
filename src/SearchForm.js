import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    try{
      if(!e.target[0].value) throw new Error('Invalid input');
    } catch (error) {}
    this.props.requestData(this.state.inputValue);
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }
  
  render() {
    return (
      <Form className="w-25 mb-3" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="cityInput" className="rounded p-1">
            Enter location name
          </Form.Label>
          <Form.Control
            id="cityInput"
            type="text"
            placeholder="Nowheresville"
            onChange={this.handleInputChange}
          />
          <Button 
            type="submit" 
            className="mt-3" 
            variant="info"
            disabled={!this.state.inputValue}
          >
            Explore!
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default SearchForm;