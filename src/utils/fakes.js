import faker from 'faker';

// console.log(faker.date.past());

const fakes = {
    image: faker.image.avatar(),
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    date: faker.date.past(30, '2000-01-01')
}

export default fakes;

