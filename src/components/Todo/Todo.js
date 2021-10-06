
import React from 'react';
import { Link } from 'react-router-dom';
import "./Todo.css";

const Todo = (props) => {
    const { id, title } = props.todo;


   
    return (
        <div>

            <div className="todo-container">
                <p>ID: {id}</p>
                <h4>Todo: {title}</h4>
                <button onClick={() => props.handleToCart(props.todo)} >Add To Cart</button>
               
                <Link className="link2" to={`todos/${id}`}>Show Details</Link>
            </div>
        </div>
    );
};

export default Todo;