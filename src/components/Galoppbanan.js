import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import GaloppbananLogo from '../../public/galoppbanan.svg';

export default class Galoppbanan extends Component{

	handleAdd = (e) => {
		e.preventDefault();

		var myObj = {
			competitor: this.refs.inputName.getValue(),
			score: this.refs.inputScore.getValue()
		}

		this.props.route.onAdd(myObj, 4);

		this.refs.inputName.value = "";
		this.refs.inputScore.value = "";

	}

  render(){
    var theScores = this.props.route.resultat[4].scores;
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
				<img src={GaloppbananLogo} style={{width: '160px'}} />
        <form onSubmit={this.handleAdd}>
						<TextField floatingLabelText="Namn" type="text" ref="inputName" required style={{marginTop: '0px'}}/><br/>
            <TextField floatingLabelText="Poäng" type="number" ref="inputScore" min="0" required/><br/>
						<FloatingActionButton mini={true} type="submit" style={{marginBottom: '10', marginTop: '16'}}>
							<ContentAdd />
						</FloatingActionButton>
				</form>
				<div className="resultat-container">
            {theScores}
        </div>
      </div>
			</MuiThemeProvider>
    )
  }
}
