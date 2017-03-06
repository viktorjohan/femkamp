import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from './components/Main';
import Bollkastning from './components/Bollkastning';
import Vattenracet from './components/Vattenracet';
import Bjornskyttet from './components/Bjornskyttet';
import UncleSam from './components/UncleSam';
import Galoppbanan from './components/Galoppbanan';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <Route path="/bollkastning" component={Bollkastning} />
          <Route path="/vattenracet" component={Vattenracet} />
          <Route path="/Bjornskyttet" component={Bjornskyttet} />
          <Route path="/UncleSam" component={UncleSam} />
          <Route path="/Galoppbanan" component={Galoppbanan} />
        </Route>
      </Router>
    );
  }
}

export default App;
