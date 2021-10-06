import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import TodoCart from '../TodoCart/TodoCart';
import "./Todos.css";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/todos`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTodos(data));

    }, []);
    const [cart, setCart] = useState([]);
    const handleToCart = (item) => {
        const newItem = [...cart, item];
        setCart(newItem);
    }
    
    
    return (
        <div className="main-container">
       
            <div className="todos-container">
                {
                    todos.map(todo => <Todo
                        key={todo.id}
                        todo={todo}
                        handleToCart={handleToCart}
                        
                    ></Todo>)
                }
            </div>
            <div>
                <TodoCart cart={cart}></TodoCart>
            </div>
        </div>
    );
};

export default Todos;