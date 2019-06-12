import React from 'react';
import { Link } from "react-router-dom";
const Recipes = props => (

    <div className="recipe-container">

     { props.recipes.map((recipe) => {

        return (
            
         <div className="recipe" key={ recipe.recipe.label } >
           <p>{ recipe.recipe.label }</p>
           <img src={recipe.recipe.image} alt=""></img>
           <p>{ recipe.recipe.calories }</p> 
           <ol>

           { recipe.recipe.ingredients.map(ingredient => ( 
               <li>{ingredient.text}</li>

           )) }

           </ol>
            <button className="button">
             <Link to={{
                 pathname: `/recipe/${recipe.recipe.label}` ,

                 state: {recipe: recipe.recipe.label}
                 
                 }}>View Recipe</Link>
             </button>
         </div>
        
        );
      }) }

</div>

);

export default Recipes;