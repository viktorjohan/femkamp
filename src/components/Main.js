import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Main extends Component{
  render(){
    return(
      <div>
        <h1>Knip käft, nu ska vi på femkamp!</h1>
        <h4><Link to='/'>Home</Link></h4>
        <ul>
          <li><Link to='/bollkastning'>Bollkastning</Link></li>
          <li><Link to='/vattenracet'>Vattenracet</Link></li>
          <li><Link to='/bjornskyttet'>Björnskyttet</Link></li>
          <li><Link to='/unclesam'>Uncle Sam</Link></li>
          <li><Link to='/galoppbanan'>Galoppbanan</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
