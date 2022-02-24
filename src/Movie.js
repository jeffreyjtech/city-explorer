import React from "react";

import Carousel from "react-bootstrap/Carousel";

class Movie extends React.Component {
  render() {
    let carouselELems = [];

    carouselELems[0] = (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/500x500"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>TITLE</h3>
          <p>
            PLACEHOLDER DINGUS
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    )

    return(
      <Carousel 
        className="w-100 m-auto mb-3"
        style={{maxWidth: "60vh"}}
      >
        {carouselELems}
      </Carousel>
    )
  }
}

export default Movie;