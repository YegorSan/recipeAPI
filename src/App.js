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

    const apiCall = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${apiKEY}`);

    const data = await apiCall.json();

    this.setState({recipes: data.hits});

    console.log(this.state.recipes);
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
