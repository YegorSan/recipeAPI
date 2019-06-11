import React from 'react';

const Recipes = props => (

    <div >

     { props.recipes.map((recipe) => {

        return (
         <div className="recipe-container"  >   
         <div className="recipe" key={ recipe.recipe.label } >
           <p>{ recipe.recipe.label }</p>
           <img src={recipe.recipe.image} alt=""></img>
         </div>
        </div>
        );
      }) }

</div>

);

export default Recipes;