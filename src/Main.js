import React from "react";
import axios from "axios";

import Map from "./Map";
import Weather from "./Weather";
import Error from "./Error";
import MovieCarousel from "./MovieCarousel";
import SearchForm from "./SearchForm";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      errors: {},
      forecasts: [{}, {}, {}],
      movies: [],
      inputValue: ''
    };
  }

  requestData = async (searchTerms) => {
    await this.requestLocationData(searchTerms);
    this.requestWeatherData();
    this.requestMovieData(searchTerms);
  };

  requestMovieData = async (searchTerms) => {
    try {
      let url = `${process.env.REACT_APP_API_SERVER}/movies?searchTerms=${searchTerms}`;

      let movies = await axios.get(url);

      console.log('Received movie data',movies);

      this.setState({
        movies: movies.data,
        errors:{
          ...this.state.errors,
          movieAPIError: { errorSource: 'movieAPI', error: null }}
      });

    } catch (error) {
      this.setState({

        errors: {
          ...this.state.errors,
          movieAPIError: { errorSource: 'movieAPI', error: error },
        },
      });
    }
  }

  requestLocationData = async (searchTerms) => {
    try {
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${searchTerms}&format=json`;
      let locationIQData = await axios.get(url);
      this.setState({
        locationData: locationIQData.data[0],
        errors: {
          ...this.state.errors,
          locationIQError: { errorSource: 'locationIQ', error: null },
        },
      });
    } catch (error) {
      this.setState({
        errors: {
          ...this.state.errors,
          locationIQError: { errorSource: 'locationIQ', error: error },
        },
      });
    }
  }

  requestWeatherData = async () =>{
    // This try-catch block is a weather request
    try {
      console.log(this.state.locationData)
      if (!this.state.locationData.lat){
        let newError = new Error('Location not found');
        newError.status = 404;
        newError.message = 'Location not found';
        throw newError;
      }
      let lat = this.state.locationData.lat;
      let lon = this.state.locationData.lon;

      let url = `${process.env.REACT_APP_API_SERVER}/weather?lat=${lat}&lon=${lon}`;

      let weather = await axios.get(url);
      // This receives an array with shape [Forecast,Forecast,Forecast]
      // Forecasts have shape {date: String, description: String}
      console.log("Got weather data\n",weather.data)

      this.setState({
        forecasts: weather.data,
        errors: {
          ...this.state.errors,
          weatherAPIError: { errorSource: 'weatherAPI', error: null },
        },
      });
    } catch (error) {
      this.setState({
        forecasts: [{}, {}, {}],
        errors: {
          ...this.state.errors,
          weatherAPIError: { errorSource: 'weatherAPI', error: error },
        },
      });
    }
  } 

  render() {
    return (
      <main className="main m-3 p-3 rounded" style={{ maxWidth: '1440px' }}>
        
        <SearchForm 
          requestData={this.requestData}
        /> 
        <Error errors={this.state.errors} />
        <MovieCarousel movies={this.state.movies} />
        <Weather forecasts={this.state.forecasts} />
        <Map locationData={this.state.locationData} />
      </main>
    );
  }
}

export default Main;