import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Error extends React.Component {
  render() {
    let errors = this.props.errors;

    let errorList = (<></>);

    for (let error in errors){
      if (error) {
        console.log('Trying to display error:', error);
        if (error.response) {
          if (error.response.data.message === 'Weather data not found') {
            errorList.push(
              <ListGroup.Item className="bg-danger text-warning rounded p-1 mt-2">
                Encountered error: <code>{error.response.data.message}</code>.
              </ListGroup.Item>
            );
          }
        } else {
          errorList.push(
            <ListGroup.Item className="bg-danger text-warning rounded p-1 mt-2">
              Encountered error: <code>{error.message}</code>. Try again.
            </ListGroup.Item>
          );
        }
      };
    }


    return (
      <>
        <ListGroup className="mb-3">
          {errorList}
        </ListGroup>
      </>
    );
  };
};

export default Error;