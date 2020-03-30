import React from 'react';
import Sort from './Sort'
// import Card from './Card'

const Container = ({ sortState, employees}) => {
    return (
        <div>
            <Sort sortState={sortState} employees={employees} />
        <div className="container">
            {/* <Card employess={employees} /> */}
            </div>
        </div>
    )
}

export default Container;