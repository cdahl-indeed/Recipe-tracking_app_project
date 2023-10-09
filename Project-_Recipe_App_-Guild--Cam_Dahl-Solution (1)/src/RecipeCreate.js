import React, { useState } from "react";

function RecipeCreate(props) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

    const [formData, setFormData] = useState({ 
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: '', 
    });



const handleRecipeChange = ({ target }) => {
        setFormData({
          ...formData,
          [target.name]: target.value,
        });
      };
  

//   const handleSubmit = (event) => {
//       event.preventDefault();
//             console.log(formData.name,formData.cuisine,formData.photo,formData.ingredients,formData.preparation);

//     //formData is all the new recipe
//     props.createRecipe(formData);
    
//       setFormData({ ...initialFormState });
//     console.log('resetData');
//     };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log('formDataCallout ', formData.name,formData.cuisine,formData.photo,formData.ingredients,formData.preparation);
   //formData is all the new recipe
    props.createRecipe(formData);
    console.log(formData);
    setFormData({
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: ''
    });

    console.log('after ', formData);
    
  };

  
  return (
    <form name="create" onSubmit={handleSubmit} >
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                required={true} 
                onChange={handleRecipeChange}
                placeholder={'Name'}
                value={formData.name}
              />
            </td>
            <td>
              <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  required={true} 
                  onChange={handleRecipeChange}
                  placeholder={'Cuisine'}
                  value={formData.cuisine}
                />
            </td>
            <td>
              <input 
                id='photo'
                name="photo" 
                type="url" 
                required={true} 
                onChange={handleRecipeChange}
                placeholder={'URL'}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea 
                id="ingredients" 
                name="ingredients" 
                required={true} 
                rows={2} 
                onChange={handleRecipeChange}
                placeholder={'Ingredients'}
                value={formData.ingredients}
                />
            </td>
            <td>
              <textarea 
                id="preparation" 
                name="preparation" 
                required={true} 
                rows={2} 
                onChange={handleRecipeChange}
                placeholder={'Preparation'}
                value={formData.preparation}
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
