import React from 'react';

const Form = props => (
<form style={{textAlign: "center"}} onSubmit={props.getRecipe} >
    <input type="text" name="recipeName" style={{ padding: "10px",marginTop: "20px", marginBottom: "20px"}}/>
    <button style={{ padding: "10px", marginTop: "20px"}}>Search Recipes</button>
</form>

);

export default Form;


