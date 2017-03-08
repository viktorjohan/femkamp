import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import TextField from 'material-ui/TextField';



export default class Vattenracet extends Component{

    handleAdd = (e) => {
		e.preventDefault();

		var myObj = {
			competitor: this.refs.inputName.getValue(),
			score: this.refs.inputScore.getValue()
		}

		this.props.route.onAddVattenRacet(myObj);

		this.refs.inputName.value = "";
		this.refs.inputScore.value = "";

	}

  render(){
	var theScores = this.props.route.resultat[1].scores;
	theScores = theScores.map(function(item, index){
		return(
			<div key={index}>
				<h2>{item.competitor}</h2>
				<p>{item.score}</p>
			</div>
		);
	});
    return(
			<MuiThemeProvider>
      <div>
        <h1>Vattenracet!</h1>
        <form onSubmit={this.handleAdd}>
					{/*<input type="text" placeholder="Name" ref="inputName" required/>}
					{<input type="number" placeholder="Score" ref="inputScore" required/>*/}
						<TextField floatingLabelText="EnkaSveden" type="text" hintText="Name" ref="inputName" />
						<TextField floatingLabelText="BörjeEnka" type="number" hintText="Score" ref="inputScore" /><br/><br/>
					<FloatingActionButton mini={true} type="submit">
						<ContentAdd />
					</FloatingActionButton>
				</form>
        <div>{theScores}</div>
      </div>
			</MuiThemeProvider>
    )
  }
}
