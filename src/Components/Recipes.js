import React from 'react';
import { Link } from "react-router-dom";
import "./Recipes.css"
const Recipes = props => (


    <div className="recipe-container">

     { props.recipes.map((recipe) => {

        return (
            
          <figure className="single-recipe" key={ recipe.recipe.label }><img src={recipe.recipe.image} alt="sample87"/>
          <figcaption>
            <h3>{ recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 25)}...`  }</h3>
            <h5>Calories:   { Math.floor(recipe.recipe.calories) }</h5>
              <h6><Link to={{
                         pathname: `/recipe/${recipe.recipe.label}` ,
        
                         state: {recipe: recipe.recipe.label}
        
                         }}>View Recipe</Link></h6>
         
          </figcaption>
       
          </figure>
        
        );
      }) }


      



</div>

);

export default Recipes;

