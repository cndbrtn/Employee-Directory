import React from 'react';
import Card from './Card'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sort = ({ sortState, employees }) => {
    let sortedEmployees = employees;
    const handleClick = () => {
        switch (sortState) {
            case 'default' || 'asc':
                sortedEmployees = employees.sort((a, b) => a.name.last > b.name.last ? 1 : -1);
                console.log('descSort', sortedEmployees)
                console.log('sortstate', sortState)
                sortState = 'desc'
                return sortedEmployees
            case 'desc':
                sortState = 'asc'
                sortedEmployees = employees.sort((a, b) => b.name > a.name ? 1 : -1);
                console.log('ascsort', sortedEmployees)
                console.log('sortstate', sortState)
                return sortedEmployees;
            default:
                sortState = 'default'
                sortedEmployees = employees;
                return sortedEmployees
        }
    }

    const renderButtons = () => {
        if (sortState === 'default' || 'desc') {
            return (
                <i className="fas fa-arrow-up"></i>
            )
        } else {
                return (<i className="fas fa-arrow-down"></i>)
            }
    }
    
    return (
        <div>
            <nav className="navbar bg-light">
                <h1>Employee Directory</h1>
                <button className="btn btn-secondary" onClick={() => handleClick()}>
                    <b>Sort by Name</b> {renderButtons()}
                </button>
            </nav>
            <div className="container">
                <Card sortedEmployees={sortedEmployees} />
            </div>
        </div>
        
    )    
};

export default Sort;