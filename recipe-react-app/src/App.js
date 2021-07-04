import './App.css';
import Header from './components/Header';
import Select from './components/Select';

import {useState} from 'react';



function App() {
  let ingredients=[
  {item:"tomatoes"},
  {item:"eggs"},
  {item:"beef"},
  {item:"chicken"},
  {item:"mushroom"}]

  const [ingredient,setIngredient]=useState("⬇️ Select a fruit ⬇️");

  return (
    <div className="App">
      <Header />
      <Select ingredients={ingredients} ingredient={ingredient} setIngredient={setIngredient}/>
    </div>
  );
}

export default App;
 