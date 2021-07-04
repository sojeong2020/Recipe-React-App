import React from 'react';

const ShowMenu = ({cook,ingredient}) => {

   return (

    <div>
        <h2>Enjoy Cooking!</h2>
        
        {cook.filter((eachCook)=>eachCook.item === ingredient)
              .map((eachCook)=> <p key={eachCook.menu[0]}>{eachCook.menu[0]}</p>
                 )
        }
        {cook.filter((eachCook)=>eachCook.item === ingredient)
             .map((eachCook)=> <p key={eachCook.menu[1]}>{eachCook.menu[1]}</p>
        )
        }
        
    </div>
);    

   
};



export default ShowMenu;