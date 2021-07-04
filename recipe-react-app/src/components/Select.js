import React from 'react';

const Select = ({cook,ingredient,setIngredient}) => {
    console.log(cook)
    console.log(ingredient)

  function handleChange(event){
        setIngredient(event.target.value);
     }; 

  return (
      <form>
        <h2>What's in your fridge?</h2>
          <select value={ingredient}  onChange={handleChange} >
            <option value="choose">--select ingredients--</option>  
             {
             cook.map((eachCook)=> 
             <option key={eachCook.item} value={eachCook.item}>{eachCook.item}
            </option>)
             }
          </select>
      </form>
  );
};

export default Select;

           