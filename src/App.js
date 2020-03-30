import React, { Component } from 'react';
import Container from './components/Container';
// import Card from './components/Card';
// import Sort from './components/Sort';
// import fakes from './utils/fakes';
import Axios from 'axios';

// console.log(fakes.date);
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortState: 'default',
            employees: []
        }
    }

    componentDidMount() {
        const query =
            'https://randomuser.me/api/?results=5'
        Axios.get(query)
            .then(people => {
                // console.log(people.data.results)
                const employees = people.data.results;
                this.setState({
                    sortState: 'default',
                    employees: employees
                })
                // console.log(this.state.employees)
            })
    }

    render() {
        return <Container sortState={this.state.sortState} employees={this.state.employees} />            
    }
    
};

export default App;