import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Main from './components/Main';
import Bollkastning from './components/Bollkastning';
import Vattenracet from './components/Vattenracet';
import Bjornskyttet from './components/Bjornskyttet';
import UncleSam from './components/UncleSam';
import Galoppbanan from './components/Galoppbanan';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Main}/>
  		<Route path="/bollkastning" component={Bollkastning} />
        <Route path="/vattenracet" component={Vattenracet} />
        <Route path="/bjornskyttet" component={Bjornskyttet} />
        <Route path="/unclesam" component={UncleSam} />
        <Route path="/galoppbanan" component={Galoppbanan} />
  	</Route>
  </Router>,
  document.getElementById('root')
);
