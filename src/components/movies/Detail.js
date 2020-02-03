import React, { useState } from 'react';   
import { apiOmdb } from '../../api'; 
class Detail extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { 
      id: this.props.id,
      movie: null
    }   
    this.getEventById = this.getEventById.bind(this);
  } 

  getEventById(id){
    var _this = this;
    apiOmdb.movies.getById(id).then((res) =>{ //TODO: _this kaldırılacak, call bind apply ile this kullanılacak 
      _this.setState({movie:res}); 
  })
}

  componentDidMount() { 
    this.getEventById(this.state.id); 
  } 
 
  render() { 
    const{movie} = this.state;
    return (
      <div>
        {movie &&
        <div>
        <h1>
           {movie.Title}
        </h1>
        <p>Date: {movie.Released}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Director: {movie.Director}</p>
        <p>Writer: {movie.Writer}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Plot: {movie.Plot}</p>
        <p>Language: {movie.Language}</p>
        <p>Country: {movie.Country}</p>
        <p>Awards: {movie.Awards}</p>
        <div>
          <img src={movie.Poster} alt="" />
        </div>
        <p>Rating: {movie.imdbRating}</p>
        <p>Production: {movie.Production}</p>
        <p>Website: {movie.Website}</p> 
       </div>
      }
    </div>
    );
  }
}
  
export default Detail;