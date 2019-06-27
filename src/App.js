import React, { Component } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Recipes from './Components/Recipes';
import './App.css';

const apiKEY = "017f9c50833c30e90a06cc268d539da6";
const appID = "c88305ec";

class App extends Component  {

  state = {

    recipes: [] ,



  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const apiCall = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${appID}&app_key=${apiKEY}&from=0&to=10`);

    const data = await apiCall.json();

    this.setState({recipes: data.hits});

    console.log(this.state.recipes);
  }

  componentDidMount = () => {

    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes});

  }

  componentDidUpdate = () => {

    const recipes = JSON.stringify(this.state.recipes);

    localStorage.setItem("recipes", recipes);

  }


render() {
  return (
    <div className="App">
    

     <Header></Header>
 	
    <Form getRecipe={this.getRecipe} />
    <Recipes recipes={this.state.recipes}/>

    


    </div>
  );
}
}

export default App;
