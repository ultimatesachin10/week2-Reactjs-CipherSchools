import React from 'react';

const Test = ({name = "", setName }) => {
    return (
        <>
        <h1>The Name is: {name}</h1>
        <input type="text" value={name} onChange={(e) => setName( e.target.value )}/>
    </>
    );
};

export default Test;