import React from "react";

import Carousel from "react-bootstrap/Carousel";

import placeholderPoster from "./placeholderPoster.png"

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

    if(movie.overview.length>463) movie.overview = movie.overview.slice(0,463).trim() + '...'

    return(
      <>
        <img
          className="m-auto d-block shadow-lg h-100"
          src={movie.image_url === 'no-poster'?
            placeholderPoster :
            movie.image_url}
          alt={`Poster for movie ${movie.title}`}
        />
        <Carousel.Caption
          className="m-auto shadow-lg rounded overflow-hidden pt-2 bg-info small"
        >
          <h4>{movie.title}</h4>
          <p className="ps-2" style={{textAlign:"justify !important"}}>
            {movie.overview}
          </p>
        </Carousel.Caption>
      </>
    )
  }
}

export default Movie;