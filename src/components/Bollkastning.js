import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import BollkastningLogo from '../../public/bollkastning.svg';

const style={
  backgroundColor: '#984984',
  marginTop: 40
}

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

  handleDelete = () =>{

    var name = this.refs.inputName.getValue();

    this.props.route.onDelete(name, 0);
  }

  render(){
  var theScores = this.props.route.resultat[0].scores;
  theScores = theScores.map(function(item, index){
    return(
      <div key={index}>
        <ul>
          <li><span style={{borderBottom: '3px solid #00bcd4', fontSize: '24px'}}>{item.competitor}</span> <span style={{borderBottom: '3px solid #d40052', fontSize: '21', color: '#0d0d0d'}}>{item.score}</span></li>
        </ul>
      </div>
    );
  });
    return(
     <MuiThemeProvider>
      <div>
        <img src={BollkastningLogo} style={{width: '160px'}}/>
        <form onSubmit={this.handleAdd}>
            <TextField floatingLabelText="Namn" type="text" ref="inputName" /><br/>
            <TextField floatingLabelText="Poäng" type="number" ref="inputScore" /><br/>
            <FloatingActionButton mini={true} type="submit" style={{marginBottom: '10', marginTop: '16'}}>
              <ContentAdd />
            </FloatingActionButton>
        </form>
          <button onClick={this.handleDelete}>delete</button>
        <div className="resultat-container">
            {theScores}
        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
