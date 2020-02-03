import React, { useState } from 'react';  
import { 
  Link,
  useLocation} from "react-router-dom";
import { apiOmdb } from '../../api'; 
import FormSearch from '../movies/FormSearch'; 
import LinkDetail from './LinkDetail';
 
class Movies extends React.Component { 
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      movies: []
    }  
    this.searchEvent= this.searchEvent.bind(this); 
  }  
  
  searchEvent(args){
    var _this = this;
    apiOmdb.movies.get(args).then((res) =>{ 
      _this.setState({movies:res.Search}); 
  });
  }
 
  render() { 
    const {movies} = this.state;
    return (
      <div>
      <h1>Movies</h1>
      <FormSearch searchEvent={this.searchEvent}/>
      <table style={{width:"100%"}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th> 
            <th>Type</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
        {
          movies && movies.length > 0 &&
          movies.sort((a, b) => b.Year - a.Year).map(movie => (
          <tr key={movie.imdbID}>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
            <td>{movie.Type}</td>
            <td>
              <img alt={movie.Title} src={movie.Poster} />
             </td> 
             <td> 
                <div> 
                  <LinkDetail movie={movie} />
                    
                </div> 
             </td>
          </tr> 
        )) 
        } 
        </tbody> 
      </table> 
    </div>
    );
  }
}
 
// Movies.fetchData = () => { 
//   debugger;
//   return apiOmdb.movies.all().then(movies => {
//     console.log(movies);
//     return {
//       movies
//     };
//   });
// }; 

export default Movies;