import React from 'react';
// import { Switch, Route, NavLink } from 'react-router-dom';
import { 
  NavLink} from "react-router-dom";
import Loadable from 'react-loadable'; 
import Head from './Head';
import RouterMain from './RouterMain';
   
const App = () => (
 
  <div className="app">
    <Head /> 
    <nav aria-label="main navigation">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>{' '}
      <NavLink exact to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink exact to="/movies" activeClassName="active">
        Movies
      </NavLink>
    </nav>

    <main className="container">
      <RouterMain />
      {/* <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route path="/about" component={LoadableAbout} />
        <Route path="/movies" component={LoadableMovies} />
      </Switch> */}
    </main>

    <footer />
  </div>
);

export default App;
