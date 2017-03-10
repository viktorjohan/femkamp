import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

export default class Bollkastning extends Component{

  handleAdd = (e) => {
    e.preventDefault();

    var myObj = {
      competitor: this.refs.inputName.getValue(),
      score: this.refs.inputScore.getValue()
    }

    this.props.route.onAdd(myObj, 0);

    this.refs.inputName.value = "";
    this.refs.inputScore.value = "";

  }

  render(){
  var theScores = this.props.route.resultat[0].scores; 
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
        <h1>Bollkastning!</h1>
        <form onSubmit={this.handleAdd}>
          {/*<input type="text" placeholder="Name" ref="inputName" required/>}
          {<input type="number" placeholder="Score" ref="inputScore" required/>*/}
            <TextField floatingLabelText="Name" type="text" ref="inputName" />
            <TextField floatingLabelText="Score" type="number" ref="inputScore" /><br/><br/>
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
