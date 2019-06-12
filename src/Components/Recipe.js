import React from 'react';

const apiKEY = "3761d3233d355bf763d0cadf69d27ac8";
const appID = "a04adced";

class Recipe extends React.Component {
    state = {
        activeRecipe: [],

    }

    componentDidMount = async () => {

    const title = this.props.location.state.recipe;
   

    const request = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${appID}&app_key=${apiKEY}`);

    const response = await request.json();

   

    console.log(response);

    }
 render () {
    console.log(this.props);
    return (
        <div>Recipe Component</div>
        );

 }
   
};

export default Recipe;