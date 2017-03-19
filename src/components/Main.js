import React, {Component} from 'react';
import TrophyLogo from '../../public/trophy.svg';
import $ from 'jquery';

export default class Main extends Component{

  componentDidMount = () => {
        var animationName = "animated zoomIn";
        var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
          $("img").addClass(animationName).one(animationEnd, function(){
            $(this).removeClass(animationName);
          });
  }

  render(){
    return(
    	<div style={{textAlign: 'center'}}>
        <img src={TrophyLogo} style={{width: '340px'}} /> 
      </div>
    )
  }
}
