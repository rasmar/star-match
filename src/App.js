import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import StarMatch from './components/StarMatch'

class App extends React.Component {
  render() {
    return (
      <Route exact path={'/'} render={(routerProps) => <StarMatch routerProps={routerProps} />} />
    )
  }
}

export default App;
