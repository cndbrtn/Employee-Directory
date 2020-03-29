import React, { Component } from 'react';
import Axios from 'axios';

class Card extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        const query =
            'https://randomuser.me/api/?results=50'
        Axios.get(query)
            .then(people => {
                // console.log(people.data.results)
                const employees = people.data.results;
                this.setState({
                    employees: employees
                })
                // console.log(this.state.employees)
            })
    }

    render() {
        const empArr = this.state.employees
        console.log(this.state.employees)
        return (
            <table className="table">
                <caption>Employees</caption>
                <thead>
                <tr>
                    <th scope="col">Profile Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                {empArr.map((emp, index) => (
                    <tr key={index}>
                        <td><img src={emp.picture.large} alt='' /></td>
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
    
}

export default Card;