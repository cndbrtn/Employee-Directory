import React from 'react';

const Card = ({ sortedEmployees }) => {
    // console.log(employees)
    
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Profile Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Birth Date</th>
                    </tr>
                </thead>
                <tbody>
                {sortedEmployees.map((emp, index) => (
                    <tr key={index}>
                        <th scope="row"><img src={emp.picture.large} alt='' /></th>
                        <td>{emp.name.first} {emp.name.last}</td>
                        <td>{emp.phone}</td>
                        <td>{emp.email}</td>
                        <td>{emp.dob.date}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        )
    }

export default Card;