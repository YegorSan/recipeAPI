import React, { Component } from 'react';
import Form from './Components/Form';
import Recipes from './Components/Recipes';
import './App.css';

const apiKEY = "e554d6e6b7b7478c20343d202492929e";


class App extends Component  {

  state = {

    recipes: [] 


  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const apiCall = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${apiKEY}&q=${recipeName}`);

    const data = await apiCall.json();
    this.setState({recipes: data.recipes});
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
