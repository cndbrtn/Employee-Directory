import React, { Component } from 'react';
// import Container from './components/Container';
import Card from './components/Card';
import Sort from './components/Sort';
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
            'https://randomuser.me/api/?results=50'
        Axios.get(query)
            .then(people => {
                // console.log(people.data.results)
                const employees = people.data.results;
                this.setState({
                    ...this.state.sortState,
                    employees: employees
                })
                // console.log(this.state.employees)
            })
    }

    render() {
        return (
            <div>
                {/* <nav className='navbar navbar-light bg-light'></nav> */}
                <Sort sortState={this.state.sortState}/>
                {/* <Container> */}
                <Card employees={this.state.employees}/>
                {/* </Container> */}
            </div>
        )
    }
    
};

export default App;