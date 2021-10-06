import React from 'react';
import ShowCartItem from '../ShowCartItem/ShowCartItem';

const TodoCart = (props) => {
    const {cart} = props;
    return (
        <div>
            <h1>Todo Cart</h1>
            <h3>Added Item: {cart.length}</h3>
            <div>
                {
                    cart.map(item => <ShowCartItem
                    item={item}
                    ></ShowCartItem>)
               } 
            </div>
        </div>

    );
};

export default TodoCart;