import React from "react";

function RecipeView({recipe, index, deleteRecipe}) {

      //console.log('recipe view: ', recipe.photo);
    //const recipeContent = recipe.formData;

    //console.log('recipe: ', recipe);

    return (
        <tr>
            <td>{(recipe.name)}</td>
            <td>{(recipe.cuisine)}</td>
            <td>
               <img 
                 alt={recipe.photo}
                 src={recipe.photo}
                 align='center'
                 />
            </td>
            <td className="content_td"> 
              <p>{(recipe.ingredients)}</p>
            </td>
            <td className="content_td">
              <p>{(recipe.preparation)}</p>
            </td>
            <td>
              <button name="delete" onClick={deleteRecipe}>
              Delete
              </button>
            </td>
          </tr>
    )
}
  
  export default RecipeView;