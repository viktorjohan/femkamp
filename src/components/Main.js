import React, {Component} from 'react';

export default class Main extends Component{
  render(){
  	var theScores = this.props.route.resultat;
  	theScores = theScores.map(function(item, index){
  		return item.scores.map(function(x, i){
  			return(
  				<div key={i}>
  					<h2>{x.competitor}</h2>
  					<p>{x.score}</p>
  				</div>
  			);
  		});
  	});

    return(
    	<div>
      		<h2>we dem main boys</h2>
      		<div>{theScores}</div>
      	</div>
    )
  }
}
