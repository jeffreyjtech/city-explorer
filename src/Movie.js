import React from "react";

import Carousel from "react-bootstrap/Carousel";

class Movie extends React.Component {
  render() {

    /* this.props.movie is a movie object, with the following shape
    {
      title: String (The movies' name)
      overview: String (long paragraph description)
      vote_average: Int (not sure, idc)
      vote_count: Int (number in the 1000s)
      image_url: String (url formatted as string)
      popularity: Int (number from 2 to 20 idk)
      release_date: String (YYYY-MM-DD stored as string, w/ leading zeroes)
    }
    */
    let movie = this.props.movie;

    return(
      <>
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
      </>
    )
  }
}

export default Movie;