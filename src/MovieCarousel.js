import React from "react";

import Carousel from "react-bootstrap/Carousel";

import Movie from "./Movie";

class MovieCarousel extends React.Component {
  render() {

    /* movie is an array of Movie objects
      Movie objects have the following shape
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
    let movieDataArray = this.props.movies;

    let movieComponents = [];
    
    if (movieDataArray[0]){
      movieComponents = movieDataArray.map((movie, idx) => (
      <Carousel.Item>
        <Movie key={movie.title} movie={movie} />
      </Carousel.Item>
      ));
    }

    return(
      <Carousel 
        className="w-100 m-auto mb-3"
        style={{maxWidth: "60vh"}}
      >
        {movieComponents}
      </Carousel>
    )
  }
}

export default MovieCarousel;