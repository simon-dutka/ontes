import React from 'react';
import './content.scss';

// Components
import AddNote from '../add-note/AddNote.js';

const Content = () => {
    return (
        <div className='content'>
            <AddNote />
        </div>
    );
};

export default Content;
