import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';


export default class Bjornskyttet extends Component{

	handleAdd = (e) => {
		e.preventDefault();

		var myObj = {
			competitor: this.refs.inputName.value,
			score: this.refs.inputScore.value
		}

		this.props.route.onAddBjornSkyttet(myObj);

		this.refs.inputName.value = "";
		this.refs.inputScore.value = "";


	}

  render(){

  var theScores = this.props.route.resultat[2].scores; 
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
        <h1>Björnskyttet!</h1>
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
