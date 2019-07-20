import React, { Component } from 'react';
import PersonList from './components/PersonList/PersonList';
import SearchBox from './components/SearchBox/SearchBox';
//import UserInput from './components/UserInput/UserInput';
//import UserOutput from './components/UserOutput/UserOutput';
//import ControlledCarousel from './components/ControlledCarousel/ControlledCarousel';

//import MapTest from './components/MapTest/MapTest';
//import MapContainer from './components/MapContainer/MapContainer';
//import logo from './logo.svg';
import './App.css';
import { persons }  from './persons';
//mport { skills }  from './skills';



class App extends Component {
	constructor() {
		super()
		this.state = {
			persons: persons,
			searchInput:'',
			userName: 'Rejini'
		}
	}

	onUserInputChange = (event) => {
		this.setState({userName: event.target.value})
	}


	onSearchChange = (event) => {
		this.setState({searchInput: event.target.value})
		
			}



  render() {

  	const filteredPortfolios = this.state.persons.filter(persons => {
				return persons.licLastName.toLowerCase().includes(this.state.searchInput.toLowerCase())
				});
  	
   return (
		  	<div>
            <SearchBox searchChange={this.onSearchChange}/>
		        <PersonList persons={filteredPortfolios}/>
       	</div> 


    );
	}

	}
  
	 //     	<UserInput userInputChange={this.onUserInputChange}/>
		// <UserOutput userName={this.state.userName}/>


	// togglePortfolioHandler = () => {
	// 	const doesShow = this.state.showPortfolios;
	// 	this.setState({showPortfolios: !doesShow });

	// }

//	<button onClick={this.togglePortfolioHandler}>Toggle Portfolios</button>
  // { this.state.showPortfolios===true ? 'wrap the div here'  : null

export default App;


 
