import React from 'react';
import Card from './Card'

const Sort = ({ sortState, employees }) => {

    const handleClick = () => {
        if (sortState === 'default') {
            sortState = 'asc'
        }
    }
    return (
        <div>
            <nav className="navbar bg-light">
                <h1>Employee Directory</h1>
                <button className="btn btn-secondary" onClick={() => handleClick()}>Sort by Name</button>
            </nav>
            <div className="container">
                <Card />
            </div>
        </div>
        
    )    
};

export default Sort