import React from 'react';  
import { 
  useLocation,
  Link
} from "react-router-dom";

function LinkDetail(props) {
  let location = useLocation(); 
  const movie = props.movie;
  return ( 
        <Link
                      key={movie.imdbID}
                      to={{
                        pathname: `/movie/${movie.imdbID}`, 
                        state: { background: location }
                      }}
                    > 
                      {movie.Title} 
                    </Link>  
  );
}
export default LinkDetail;