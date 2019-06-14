import React from 'react';
import { Link } from "react-router-dom";
import "./Recipes.css"
const Recipes = props => (


    <div className="recipe-container">

     { props.recipes.map((recipe) => {

        return (
            
         <div className="recipe" key={ recipe.recipe.label } >
           
           <div className="image">
           <img src={recipe.recipe.image} alt=""></img>
           </div>
          
           <div className="name">
           <p>{ recipe.recipe.label.length < 20 `${recipe.recipe.label}` }</p>
           </div>
         
           
       
           <ul className="media">
		       <li>Weight:   { Math.floor(recipe.recipe.totalWeight) }</li>
		       <li>Calories:   { Math.floor(recipe.recipe.calories) }</li>
		       <li>Servings:   { recipe.recipe.yield }</li>
  		     </ul>

           

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

