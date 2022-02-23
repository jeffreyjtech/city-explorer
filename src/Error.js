import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Error extends React.Component {
  render() {
    let errors = this.props.errors;

    let errorListItems = [];

    for (let error of Object.values(errors)){
      console.log('Iterating on error:',error)
      if (error) {
        console.log('Trying to display error:', error.message);
        if (error.response.data.error) {
          errorListItems.push(
            <ListGroup.Item className="bg-danger text-warning rounded p-1 mt-2">
              Encountered error: <code>{error.response.data.error}</code>.
            </ListGroup.Item>
          );
        
        } else {
          console.log(error)
          errorListItems.push(
            <ListGroup.Item className="bg-danger text-warning rounded p-1 mt-2">
              Encountered error: <code>{String.toString(error.response.data)}</code>. Try again.
            </ListGroup.Item>
          );
        }
      };
    }


    return (
      <ListGroup className="mb-3">
        {errorListItems}
      </ListGroup>
    );
  };
};

export default Error;