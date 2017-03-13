import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <IndexLink to='/'><h1 className="header-h1"><span style={{borderBottom: '6px solid #d40052'}}>Fem</span><span style={{borderBottom: '6px solid #00bcd4'}}>kampen</span></h1></IndexLink>
          <ul className="nav-ul">
            <li className="nav-li"><Link to='/bollkastning' activeStyle={{borderColor: "#00bcd4"}}>Bollkastning</Link></li>
            <li className="nav-li"><Link to='/vattenracet' activeStyle={{borderColor: "#00bcd4"}}>Vattenracet</Link></li>
            <li className="nav-li"><Link to='/bjornskyttet' activeStyle={{borderColor: "#00bcd4"}}>Björnskyttet</Link></li>
            <li className="nav-li"><Link to='/unclesam' activeStyle={{borderColor: "#00bcd4"}}>Uncle Sam</Link></li>
            <li className="nav-li"><Link to='/galoppbanan' activeStyle={{borderColor: "#00bcd4"}}>Galoppbanan</Link></li>
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
