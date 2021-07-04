import './App.css';
import Header from './components/Header';
import Select from './components/Select';
import ShowMenu from './components/ShowMenu';


import {useState} from 'react';



function App() {
  let cook=[
  {item:"tomatoes",menu:['Tomato Salad','Tomato Soup']},
  {item:"eggs",menu:['Omelette','Egg Tarts']},
  {item:"beef",menu:['Steak','Stew']},
  {item:"chicken",menu:['BBQ chicken','Curry Chicken']},
  {item:"mushrooms",menu:['Stuffed Mushrooms','Mushroom Soup']}]

  const [ingredient,setIngredient]=useState("choose");

  return (
    <div className="App">
      <Header />
      <Select cook={cook} ingredient={ingredient} setIngredient={setIngredient}/>
      <ShowMenu cook={cook} ingredient={ingredient}/>
    </div>
  );
}

export default App;
 