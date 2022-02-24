import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

class Error extends React.Component {
  render() {
    /* this.props.errors is an object containing objects with shape 
      {
        errorSourceKey: myErrorObject,
        errorSourceKey: myErrorObject,
        ... to the nth element
      }

      myErrorObject has shape {errorSource: String, error: Error-class object}
    */
    let errors = Object.values(this.props.errors);
    /* After this assignment, "errors" is now an array with shape
      [
        {errorSource: String, error: Error-class object},
        {errorSource: String, error: Error-class object},
        ... to the nth element
      ]
    */

    let errorListItems = [];
    
    for (let errorObj of errors){
      let error = errorObj.error;
      let errorSource = errorObj.errorSource;

      if (error) {
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