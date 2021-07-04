import React, { useState } from 'react';
import FavMenu from './FavMenu';

const ShowMenu = ({cook,ingredient}) => {
    const [selectedMenu,setSelectedMenu]=useState('')

   return (
    <div>
        <h2>Enjoy Cooking</h2>
        <ul>{cook.filter((eachCook)=> eachCook.item===ingredient)
                  .map((eachCook)=>{
                      return(
                          <li key={eachCook.menu}>
                              <p>{eachCook.menu[0]}</p>
                              <button className="btn" value={eachCook.menu[0]} 
                              onClick={(event)=> setSelectedMenu(event.target.value)}  >⭐</button>

                              <p>{eachCook.menu[1]}</p>
                              <button className="btn" value={eachCook.menu[1]} 
                              onClick={(event)=> setSelectedMenu(event.target.value)}  >⭐</button>

                              <FavMenu  selectedMenu={selectedMenu}/>
                          </li>
                      )
                  })}
        </ul>
    </div>
);    

   
};


export default ShowMenu;