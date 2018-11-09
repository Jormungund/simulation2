import React from 'react';

const House = (props) => {
    const { houses } = props
    return(
        <div>
            <img src={houses.image_url} alt="house" style={{width: 300}}/>
            <h1>{houses.name}</h1>
            <h1>{houses.address}</h1>
            <h1>{houses.city}</h1>
            <h1>{houses.state}</h1>
            <h1>{houses.zip}</h1>
            <h1>{houses.mortgage}</h1>
            <h1>{houses.rent}</h1>
            <button>Delete</button>
        </div>
    )
}

export default House;