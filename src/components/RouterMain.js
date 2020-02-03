import React from 'react';
// import { Switch, Route, NavLink } from 'react-router-dom';
import Modal from './Modal';
import {
  Switch,
  Route,
  useLocation} from "react-router-dom";
import Loadable from 'react-loadable';  
  
const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './Home'),
  loading: () => <div>Loading...</div>
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ './about/About'),
  loading: () => <div>Loading...</div>
});

const LoadableMovies = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ './movies'),
  loading: () => <div>Loading...</div>
});






function RouterMain() {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
          <Route exact path="/" component={LoadableHome} />
          <Route path="/about" component={LoadableAbout} />
          <Route path="/movies" component={LoadableMovies} /> 
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/movie/:id" children={<Modal />} />}
    </div>
  );
}













// let location = useLocation();  
// let background = location.state && location.state.background;
// class RouterMain extends React.Component {
//   constructor(props) {
//     super(props);  
   
//   }   
  
//   render() {  
    
//    return(
//     <div>
//       <Switch location={background || location}>
//         <Route exact path="/" component={LoadableHome} />
//         <Route path="/about" component={LoadableAbout} />
//         <Route path="/movies" component={LoadableMovies} /> 
//       </Switch>

//       {/* Show the modal when a background page is set */}
//       {background && <Route path="/img/:id" children={<Modal />} />}
//     </div>
//    )
//   }
  
// }
 
// Movies.fetchData = () => { 
//   debugger;
//   return apiOmdb.movies.all().then(movies => {
//     console.log(movies);
//     return {
//       movies
//     };
//   });
// }; 

export default RouterMain;
 