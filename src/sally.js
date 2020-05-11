import React from 'react';

export default function Sally(props) {
    console.log(props);
    return (
    <p className="name">
        {props.name}
        </p>
    )

}