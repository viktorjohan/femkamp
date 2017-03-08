import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Knip käft, nu ska vi på femkamp!</h1>
        <ul>
          <li><IndexLink to='/'>Home</IndexLink></li>
          <li><Link to='/bollkastning'>Bollkastning</Link></li>
          <li><Link to='/vattenracet'>Vattenracet</Link></li>
          <li><Link to='/bjornskyttet'>Björnskyttet</Link></li>
          <li><Link to='/unclesam'>Uncle Sam</Link></li>
          <li><Link to='/galoppbanan'>Galoppbanan</Link></li>
        </ul>
        <div>
        	{this.props.children}
        </div>
      </div>
    );
  }
}

export default App;


