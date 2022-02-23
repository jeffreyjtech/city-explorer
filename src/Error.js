import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Error extends React.Component {
  render() {
    let errors = Object.values(this.props.errors);
    console.log('Errors variable stores:',errors)

    let errorListItems = [];
    
    for (let errorObj of errors){
      let error = errorObj.error;
      let errorSource = errorObj.errorSource;

      console.log('Iterating on error:',error)
      if (error) {
        console.log('Trying to display error:', error.message);
        if (error.message) {
          errorListItems.push(
            <ListGroup.Item className="bg-danger text-warning rounded p-1 mt-2">
              Encountered error from <b>{errorSource}</b> <code>{error.message}</code>.
            </ListGroup.Item>
          );
        
        } else if (typeof(error.response.data) === 'string'){
          errorListItems.push(
            <ListGroup.Item className="bg-danger text-warning rounded p-1 mt-2">
              Encountered error from <b>{errorSource}</b> <code>{error.response.data}</code>. Try again.
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