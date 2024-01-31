import React from 'react';

const PersonForm = ({handleSubmit, newName, handleOnChange, newNumber, handleOnChangeNumber}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleOnChange}/>
        </div>
        <div>
          phone number: <input value={newNumber} onChange={handleOnChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
};

export default PersonForm;