import React from 'react';
import Sort from './Sort'

const Container = ({ sortState, employees}) => {
    return (
        <div>
            <Sort sortState={sortState} employees={employees} />
        <div className="container">
            </div>
        </div>
    )
}

export default Container;