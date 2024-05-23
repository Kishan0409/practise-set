import React, { useState } from "react";

const Shuffle = () => {
    const[items , setItems] = useState([
        'Apple' , "mango" , 'orange' , 'banana'
    ])

   const handleShuffle = () => {
     const shuffleItems = [...items]
     for(let i= shuffleItems.length-1; i>0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [shuffleItems[i] , shuffleItems[j]] = 
        [shuffleItems[j] ,
         shuffleItems[i]
        ];
     }
     setItems(shuffleItems)
   }


    return (
        <div>
            <h1>List of Items </h1>
            <ul>{items.map((el , index) => (
                <li>{el}</li>

            ))}</ul>
            <button onClick={handleShuffle}>Shuffle</button>

        </div>
    )
}
export default Shuffle;