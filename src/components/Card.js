import React from 'react';

const Card = ({image, name, phone, email, date}) => {
    return (
        <div>
            <ul>
                <li><img src={image} alt='avatar' /></li>
                <li>Name: {name}</li>
                <li>Phone #: {phone}</li>
                <li>Email: {email}</li>
                <li>{date}</li>
            </ul>
        </div>
    )
}

export default Card;