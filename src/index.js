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

class Index extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			resultat: [
		    {
		        "id": 1,
		        "name": "Bollkastning",
		        "scores": [
		            {"competitor": "Adam Bratt", "date": "2017-03-01 16:55:09", "score": 400},
		            {"competitor": "Vera Rutgersson", "date": "2017-02-27 15:35:22", "score": 430},
		            {"competitor": "Bernard Levander", "date": "2017-03-04 21:39:55", "score": 360},
		            {"competitor": "Anna Marklund", "date": "2017-03-01 16:49:33", "score": 320},
		            {"competitor": "Peyvan de la Cruz", "date": "2017-03-08 09:12:39", "score": 280},
		            {"competitor": "Sonja Heden-Bratt", "date": "2017-03-01 11:28:46", "score": 400},
		            {"competitor": "Lukas Alexandersson", "date": "2017-03-04 22:00:08", "score": 350},
		            {"competitor": "Preben Holm", "date": "2017-02-28 13:34:28", "score": 420}
		        ]
		    },
		    {
		        "id": 2,
		        "name": "Vattenracet",
		        "scores": [
		            {"competitor": "Adam Bratt", "date": "2017-02-22 08:38:03", "score": 330},
		            {"competitor": "Stig Ek", "date": "2017-02-27 11:23:28", "score": 415},
		            {"competitor": "Preben Holm", "date": "2017-03-02 07:44:12", "score": 200},
		            {"competitor": "Sonja Heden-Bratt", "date": "2017-03-06 14:00:13", "score": 355},
		            {"competitor": "Lukas Alexandersson", "date": "2017-03-04 22:00:08", "score": 350},
		            {"competitor": "Sten O'Stanley", "date": "2017-03-09 16:11:09", "score": 170},
		            {"competitor": "Peyvan de la Cruz", "date": "2017-02-11 18:18:18", "score": 255}
		        ]
		    },
		    {
		        "id": 3,
		        "name": "Björnskyttet",
		        "scores": [
		            {"competitor": "Sten O'Stanley", "date": "2017-03-11 11:44:34", "score": 21.5},
		            {"competitor": "Vera Rutgersson", "date": "2017-03-01 08:12:42", "score": 37.5},
		            {"competitor": "Stig Ek", "date": "2017-03-02 23:02:15", "score": 32.0},
		            {"competitor": "Bernard Levander", "date": "2017-02-23 08:35:35", "score": 26.5},
		            {"competitor": "Peyvan de la Cruz", "date": "2017-02-24 11:14:27", "score": 28.0},
		            {"competitor": "Sonja Heden-Bratt", "date": "2017-03-03 18:11:28", "score": 30.5},
		            {"competitor": "Preben Holm", "date": "2017-03-02 20:45:31", "score": 25.0}
		        ]
		    },
		    {
		        "id": 4,
		        "name": "Uncle Sam",
		        "scores": [
		            {"competitor": "Sonja Heden-Bratt", "date": "2017-03-08 13:27:38", "score": 92},
		            {"competitor": "Vera Rutgersson", "date": "2017-01-09 18:59:34", "score": 77},
		            {"competitor": "Anna Marklund", "date": "2017-03-02 13:43:01", "score": 74},
		            {"competitor": "Preben Holm", "date": "2017-03-09 10:54:00", "score": 68},
		            {"competitor": "Peyvan de la Cruz", "date": "2017-03-04 12:23:34", "score": 100},
		            {"competitor": "Sten O'Stanley", "date": "2017-03-10 14:01:36", "score": 59},
		            {"competitor": "Lukas Alexandersson", "date": "2017-02-23 10:09:42", "score": 71},
		            {"competitor": "Mia van der Kwast", "date": "2017-02-22 10:11:48", "score": 37}
		        ]
		    },
		    {
		        "id": 5,
		        "name": "Galoppbanan",
		        "scores": [
		            {"competitor": "Vera Rutgersson", "date": "2017-03-07 11:09:33", "score": 10},
		            {"competitor": "Sonja Heden-Bratt", "date": "2017-03-07 11:09:33", "score": 4},
		            {"competitor": "Preben Holm", "date": "2017-03-07 11:09:33", "score": 3},
		            {"competitor": "Stig Ek", "date": "2017-03-07 11:09:33", "score": 8},
		            {"competitor": "Mia van der Kwast", "date": "2017-03-07 11:09:33", "score": 5},
		            {"competitor": "Lukas Alexandersson", "date": "2017-03-07 11:09:33", "score": 9},
		            {"competitor": "Sten O'Stanley", "date": "2017-03-07 11:09:33", "score": 1},
		            {"competitor": "Anna Marklund", "date": "2017-03-07 11:09:33", "score": 7},
		            {"competitor": "Peyvan de la Cruz", "date": "2017-03-07 11:09:33", "score": 2},
		            {"competitor": "Bernard Levander", "date": "2017-03-07 11:09:33", "score": 6}
		        ]
		    }
		]
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
 		scoreArray.unshift(myObj);

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

	render(){
		return(
			<Router history={browserHistory}>
  				<Route path="/" component={App}>
  					<IndexRoute resultat={this.state.resultat} component={Main}/>
			  		<Route path="/bollkastning" resultat={this.state.resultat} onAdd={this.onAdd} onDelete={this.onDelete} component={Bollkastning} />
			        <Route path="/vattenracet" resultat={this.state.resultat} onAdd={this.onAdd} component={Vattenracet} />
			        <Route path="/bjornskyttet" resultat={this.state.resultat} onAdd={this.onAdd} component={Bjornskyttet} />
			        <Route path="/unclesam" resultat={this.state.resultat} onAdd={this.onAdd} component={UncleSam} />
			        <Route path="/galoppbanan" resultat={this.state.resultat} onAdd={this.onAdd} component={Galoppbanan} />
  				</Route>
 			 </Router>
		);
	}
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
