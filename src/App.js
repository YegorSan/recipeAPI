import React, { Component } from 'react';
import Form from './Components/Form';
import Recipes from './Components/Recipes';
import './App.css';

const apiKEY = "3761d3233d355bf763d0cadf69d27ac8";
const appID = "a04adced"

class App extends Component  {

  state = {

    recipes: [] ,



  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const apiCall = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${appID}&app_key=${apiKEY}&from=0&to=12`);

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
      <header className="App-header">
        REACT RECIPES APP
      </header>
      <Form getRecipe={this.getRecipe} />
      <Recipes recipes={this.state.recipes}/>
    </div>
  );
}
}

export default App;
