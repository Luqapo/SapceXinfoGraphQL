import React, { Component } from 'react';
import {  Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';

import Launches from './Components/Launches/Launches';
import Launch from './Components/Launch/Launch';
import NavBar from './Components/NavBar/NavBar';
import Rockets from './Components/Rockets/Rockets';
import Missions from './Components/Missions/Missions';
import logo from './logo.png';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});


class App extends Component {
  render() {
    return (
        <Router>
          <ApolloProvider client={client} >
              <div className="container">
              <NavBar />
                <img style={{width: '300px', height: '100px', display: 'block', margin: '0 auto'}} src={logo} alt="SpaceX"/>
                <Switch>
                  <Route path="/launch/:flight_number" component={Launch} />
                  <Route exact path="/rockets" component={Rockets} />
                  <Route exact path="/missions" component={Missions} />
                  <Route exact path="/" component={Launches} />
                </Switch>
              </div>  
          </ApolloProvider>
        </Router>
    );
  }
}

export default App;
