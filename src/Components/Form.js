import React from 'react';

const Form = props => (
<form onSubmit={props.getRecipe} >
    <input type="text" name="recipeName" style={{ marginTop: "20px" }}/>
    <button>Search Recipes</button>
</form>

);

export default Form;


