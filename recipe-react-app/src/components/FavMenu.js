import React from 'react';


const FavMenu = ({selectedMenu}) => {
    console.log(selectedMenu)
return (
        <div>
            <h2>Favorite Cooking</h2>
            <ul>
                <li>{selectedMenu}</li>
            </ul> 
            
        </div>
    );
};

export default FavMenu;