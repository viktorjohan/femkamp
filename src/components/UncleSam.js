import React, {Component} from 'react';

export default class UncleSam extends Component{

	handleAdd = (e) => {
		e.preventDefault();

		var myObj = {
			competitor: this.refs.inputName.value,
			score: this.refs.inputScore.value 
		}

		this.props.route.onAddUncleSam(myObj);

		this.refs.inputName.value = "";	
		this.refs.inputScore.value = "";	

	}

  render(){
  var theScores = this.props.route.resultat[3].scores; 
  theScores = theScores.map(function(item, index){
    return(
      <div key={index}>
        <h2>{item.competitor}</h2>
        <p>{item.score}</p>
      </div>
    );
  });
    return(
      <div>
        <h1>Uncle Sam!</h1>
        <form onSubmit={this.handleAdd}>
         <input type="text" placeholder="Name" ref="inputName" required/>
         <input type="number" placeholder="Score" ref="inputScore" required/>
         <button type="submit">Add</button>
        </form>
        <div>{theScores}</div>
      </div>
    )
  }
}
