import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentSort from 'material-ui/svg-icons/content/sort';
import TextField from 'material-ui/TextField';
import RifleLogo from '../../public/rifle3.svg';
import TeddyLogo from '../../public/teddy-bear2.svg';
import $ from 'jquery';


export default class Bjornskyttet extends Component{

	componentDidMount = () => {
        var animationName = "animated jello";
        var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        $("img").mouseenter(function(){
          $(this).addClass(animationName).one(animationEnd, function(){
            $(this).removeClass(animationName);
          });
        });
      }

	handleAdd = (e) => {
		e.preventDefault();

		var myObj = {
			competitor: this.refs.inputName.getValue(),
			score: this.refs.inputScore.getValue()
		}

		this.props.route.onAdd(myObj, 2);

		this.refs.inputName.value = "";
		this.refs.inputScore.value = "";

	}

	handleDelete = () =>{

    var name = this.refs.inputName.getValue();

    this.props.route.onDelete(name, 2);
  }

  handleSort = () =>{
    this.props.route.onSort(2);
  }

  render(){
  var theScores = this.props.route.resultat[2].scores;
	theScores = theScores.map(function(item, index){
		return(
			<div key={index} className="animated fadeInDown comp-container">
	          <div className="name-container">{item.competitor}</div>
	          <div className="score-container">{item.score}</div>
	      </div>
		);
	});
    return(
    	<MuiThemeProvider>
      <div>
      <div className="img-container">
		<img src={TeddyLogo} alt='Bjornskyttet' style={{width: '160px', position: 'relative', left: '25px'}}/>
        <img src={RifleLogo} alt='rifle' style={{width: '160px', position: 'relative'}}/>
       </div>
        <form onSubmit={this.handleAdd}>
            <TextField floatingLabelText="Namn" type="text" ref="inputName" required /><br/>
            <TextField floatingLabelText="Poäng" type="number" ref="inputScore" required min="0" max="50"/><br/>
            <FloatingActionButton mini={true} type="submit" style={{marginBottom: '10px', marginTop: '16px'}}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} secondary={true} type="button" onClick={this.handleDelete} style={{marginRight:'15px', marginLeft: '15px'}}>
              <ContentRemove/>
            </FloatingActionButton>
            <FloatingActionButton mini={true} type="button" backgroundColor="teal" onClick={this.handleSort} >
              <ContentSort/>
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
