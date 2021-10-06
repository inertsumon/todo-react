import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ShowCartDetails.css";

const ShowCartDetails = () => {
    const { itemId } = useParams();
    const [showDetails, setShowDetails] = useState({});
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/todos/${itemId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setShowDetails(data));

    }, []);
 
    return (
        <div>
             <div className='details-container'>
            {
                showDetails.completed ? <p>Done</p> : <p>Undone</p>
            }
            <p>{showDetails.id}</p>
            <p>{showDetails.title}</p>
        </div>
        </div>
    );
};

export default ShowCartDetails;