import React from "react";

import Carousel from "react-bootstrap/Carousel";

class Movie extends React.Component {
  render() {

    /* movie is an array of Movie objects
      Movie objects have the following shape
    {
      title: String (The movies' name)
      overview: String (looooooong paragraph description)
      vote_average: Int (not sure, idc)
      vote_count: Int (number in the 1000s)
      image_url: String (url formatted as string)
      popularity: Int (number from 2 to 20 idk)
      release_date: String (YYYY-MM-DD stored as string, w/ leading zeroes)
    }
    */
    let movieDataArray = this.props.movies;

    let carouselELems = [];

    console.log(movieDataArray)
    
    if (movieDataArray){
      carouselELems = movieDataArray.map(movie => (
        <Carousel.Item key={movie.title}>
          <img
            className="d-block w-100"
            src={movie.image_url}
            alt={`Poster for movie ${movie.title}`}
          />
          <Carousel.Caption
            className="m-auto shadow-lg rounded overflow-auto bg-info w-75 h-auto"
          >
            <h3>{movie.title}</h3>
            <p>
              {movie.overview}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ));
    }

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