import React from 'react';

const Filter = ({onChange}) => {
    
    return (
        <div>
            Filter names: <input onChange={onChange} />
        </div>
    );
};

export default Filter;