import React from 'react';
import {Link} from 'react-router-dom';
import "./Recipe.css"
const apiKEY = "017f9c50833c30e90a06cc268d539da6";
const appID = "c88305ec";


class Recipe extends React.Component {

  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${appID}&app_key=${apiKEY}`);
    
    const res = await req.json();
    this.setState({ activeRecipe: res.hits[0] });
    console.log(this.state.activeRecipe);
  }

  
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="recipe-container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="recipe">
            <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
            <h3>{ recipe.recipe.label }</h3>
            <ol>

           { recipe.recipe.ingredients.map(ingredient => ( 
               <li>{ingredient.text}</li>

           )) }

           </ol>
            <button className="single-recipe-label">
              <Link to="/">Back Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;


