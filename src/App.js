import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="header-h1"><span style={{borderBottom: '6px solid #d40052'}}>Fem</span><span style={{borderBottom: '6px solid #00bcd4'}}>kampen<span style={{color: '#d40052'}}>!</span></span></h1>
          <ul className="nav-ul">
            {/*<li><IndexLink to='/'>Home</IndexLink></li>*/}
            <li className="nav-li"><Link to='/bollkastning'>Bollkastning</Link></li>
            <li className="nav-li"><Link to='/vattenracet'>Vattenracet</Link></li>
            <li className="nav-li"><Link to='/bjornskyttet'>Björnskyttet</Link></li>
            <li className="nav-li"><Link to='/unclesam'>Uncle Sam</Link></li>
            <li className="nav-li"><Link to='/galoppbanan'>Galoppbanan</Link></li>
          </ul>
        </div>
        <div>
        	{this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
