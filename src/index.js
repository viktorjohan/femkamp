import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import axios from 'axios';
import App from './App';
import Main from './components/Main';
import Bollkastning from './components/Bollkastning';
import Vattenracet from './components/Vattenracet';
import Bjornskyttet from './components/Bjornskyttet';
import UncleSam from './components/UncleSam';
import Galoppbanan from './components/Galoppbanan';
import data from './resultat.json';


class Index extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			resultat: data.femkampsResultat
	}
} 



	// componentDidMount = () => {
 //    this.serverRequest =
 //       axios.get('https://www.hulabeck.se/html/temp/femkampsResultat.json')
 //            .then(res => {
 //                this.setState({
 //               	resultat: res.data.femkampsResultat
 //               })
 //            })
 //    }

 onAdd = (myObj, x) => {
 		var stateArray = this.state.resultat;
 		var scoreArray = this.state.resultat[x].scores;
 		scoreArray.push(myObj);

 		stateArray[x].scores = [];

 		for(var i = 0; i < scoreArray.length; i++){
 			stateArray[x].scores.push(scoreArray[i]);
 		}

 		this.setState({
 			resultat: stateArray
 		});
 	}

 	onDelete = (name, x) => {
 		var stateArray = this.state.resultat;
 		var scoreArray = this.state.resultat[x].scores;
 		scoreArray = scoreArray.filter(function(val){
 			return val.competitor !== name;
 		});

 		stateArray[x].scores = [];

 		for(var i = 0; i < scoreArray.length; i++){
 			stateArray[x].scores.push(scoreArray[i]);
 		}

 		this.setState({
 			resultat: stateArray
 		});
 	}

 	onSort = (x) =>{
 		var stateArray = this.state.resultat;
 		var scoreArray = this.state.resultat[x].scores;
 		scoreArray = scoreArray.sort(function(a, b){
 			if(a.score > b.score){
 				return 1;
 			} else{
 				return -1;
 			}
 		});

 		stateArray[x].scores = [];

 		for(var i = 0; i < scoreArray.length; i++){
 			stateArray[x].scores.push(scoreArray[i]);
 		}

 		this.setState({
 			resultat: stateArray
 		});
 	}

	render(){
		return(
			<Router history={browserHistory}>
  				<Route path="/" component={App}>
  					<IndexRoute resultat={this.state.resultat} component={Main}/>
			  		<Route path="/bollkastning" resultat={this.state.resultat} onAdd={this.onAdd} onDelete={this.onDelete} onSort={this.onSort} component={Bollkastning} />
			        <Route path="/vattenracet" resultat={this.state.resultat} onAdd={this.onAdd} onDelete={this.onDelete} onSort={this.onSort} component={Vattenracet} />
			        <Route path="/bjornskyttet" resultat={this.state.resultat} onAdd={this.onAdd} onDelete={this.onDelete} onSort={this.onSort} component={Bjornskyttet} />
			        <Route path="/unclesam" resultat={this.state.resultat} onAdd={this.onAdd} onDelete={this.onDelete} onSort={this.onSort} component={UncleSam} />
			        <Route path="/galoppbanan" resultat={this.state.resultat} onAdd={this.onAdd} onDelete={this.onDelete} onSort={this.onSort} component={Galoppbanan} />
  				</Route>
 			 </Router>
		);
	}
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
