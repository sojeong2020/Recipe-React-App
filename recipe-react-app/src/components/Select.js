import React from 'react';

const Select = ({ingredients,ingredient,setIngredient}) => {
    console.log(ingredients)
    console.log(ingredient)


    function handleSubmit(event){
        event.preventDefault();
        console.log(ingredient);
      };

      function handleChange(event){
        setIngredient(event.target.value);
     }; 

    return (
       <form onSubmit={handleSubmit}>

           <h2>What's in your fridge?</h2>
           <select value={ingredient}  onChange={handleChange} >
             <option value="⬇️ Select a fruit ⬇️">--select--</option>  
             {ingredients.map((ingredient)=> <option key={ingredient.item} value={ingredient.item}>{ingredient.item}</option>)}
            
           </select>
           <button type="submit">choose</button>
       </form>
           
           
    );
};

export default Select;

           