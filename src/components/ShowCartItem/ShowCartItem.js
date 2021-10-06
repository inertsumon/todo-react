import React from 'react';
import "./ShowCartItem.css";

const ShowCartItem = (props) => {
    const { id, title, completed } = props.item;

    return (
        <div className='added-container'>
            {
                completed ? <p>Done</p> : <p>Undone</p>
            }
            <p>{id}</p>
            <p>{title}</p>
        </div>
        
    );
};

export default ShowCartItem;