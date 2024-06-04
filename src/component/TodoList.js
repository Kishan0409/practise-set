import React, { useState } from 'react';
import "./Todo.css"

const TodoList = () => {
    const[activity , setActivity] = useState("");
    const[listData , setListData] = useState([]);

const addActivity = () => {
    
    setListData((listData) => {
        const updatedList = [...listData , activity]
        console.log(updatedList);
        setActivity('')
        return updatedList;
    } )

}

function  removeActivity(i) {
    const updatedListData = listData.filter((elem , id) => {
        return i!==id;
    })
    setListData(updatedListData)

}

const removeAll = () => {
    setListData([])
}

    return (
        <>
         <div className='container'>
            <div className='header'>TODO LIST</div>
            <input type='text'  placeholder='ADD Activity' value={activity} onChange={(e) => 
                setActivity(e.target.value)}/>
                <button onClick={addActivity}>ADD</button>
                <p className='List-heading'>Here is your List :{")"}</p>
                {listData != [] && listData.map((data , i) => {
                    return(
                        <>
                        <p key={i}></p>
                        <div className='listData'>{data}</div>
                        <div className='btn-position'>
                            <button onClick={() => removeActivity(i)}>remove(-)</button>
                        </div>
                        
                        </>
                    )

                })}
                {listData.length >=1 &&  <button onClick={removeAll}>Remove all</button>}
                

         </div>
        
        </>
    )
}
export default TodoList;