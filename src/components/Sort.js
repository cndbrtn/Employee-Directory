/* eslint-disable default-case */
import React, { Component } from 'react';
import Card from './Card'
import Axios from 'axios'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Sort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortState: '',
            employees: [],
        }
}
    

    componentDidMount() {
        const query =
            'https://randomuser.me/api/?results=50'
        Axios.get(query)
            .then(people => {
                // console.log(people.data.results)
                const employees = people.data.results;
                this.setState({
                    sortState: 'asc',
                    employees: employees
                })
                // console.log(this.state.employees)
            })
    }
   
    handleClick() {
        const sort = this.state.sortState;
        const employees = this.state.employees;

        switch (sort) {
            case 'asc':
                const descEmp = employees.sort((a, b) => a.name.last > b.name.last ? 1 : -1);
                console.log('descSort', descEmp)
                console.log('sortstate', sort)
                return this.setState({ sortState: 'desc', employees: descEmp })
            case 'desc':
                const ascEmp = employees.sort((a, b) => b.name > a.name ? 1 : -1);
                console.log('ascsort', ascEmp)
                console.log(sort)
                return this.setState({ sortState: 'asc', employees: ascEmp });
            default:
                // console.log(sort)
                return this.setState({ sortState: 'desc', employees: employees })
        }
    }

    renderButtons() {
        const sort = this.state.sortState
        switch (sort) {
            case 'asc':
                return <i className="fas fa-arrow-up"></i>;
            case 'desc':
                return <i className="fas fa-arrow-down"></i>;
            case 'none':
                return <span><b>--</b></span>   
        }
    }

    renderAZ() {       
        return (
            <div className="row">
                <h4>Filter by Age</h4>
                    <button className="btn btn-link" onClick={(e) => this.handleFilter(e)}>Under 40</button>
            </div>
        )
    }
    
    handleFilter(e) {
        const age = e.currentTarget.dataset.id;
        // const ageInt = parseInt(age);
        const employees = this.state.employees;
        console.log('hit', age);

        if (age === 'reset') {
            return window.location.reload();
        }

        // const 

        const filterEmp = employees.filter((emp) => {
            const ageInt = parseInt(emp.dob.age)
            if (ageInt <= 39) {
                return emp;
            }
        })
        
        this.setState({ employees: filterEmp})
    }

    render() {
        return (
            <div>
                <nav className="navbar bg-light">
                    <h1>Employee Directory</h1>
                    <button className="btn btn-secondary" onClick={() => this.handleClick()}>
                        <b>Sort by Name</b> {this.renderButtons()}
                    </button>
                    {this.renderAZ()}
                </nav>
                <div className="container">
                    <Card sortedEmployees={this.state.employees} />
                </div>
            </div>
        )   
    }
     
};

export default Sort;