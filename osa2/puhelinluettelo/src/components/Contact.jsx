import React from 'react';

const Contact = ({name, num, handleDelete}) => <li>{name} - {num}<button onClick={handleDelete}>REMOVE</button></li>

export default Contact;