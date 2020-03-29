import React from 'react';
import Container from './components/Container';
import Card from './components/Card';
import fakes from './utils/fakes';

console.log(fakes.date);
const App = () => {
    return (
        <div>
            {/* <Sort sort={sortByName} /> */}
            <Container>
                <Card
                    image={fakes.image}
                    name={fakes.name}
                    phone={fakes.phone}
                    email={fakes.email}
                    date={fakes.date}
                />
            </Container>
        </div>
    )
};

export default App;