// import React from 'react';
import React, { useState } from 'react';

import './note.scss';

const Note = ({ title, text, id, deleteItem }) => {
    // State for opening a note
    const [readNote, setReadNote] = useState(false);

    const toggleNote = () => {
        if (text.length > 100) {
            setReadNote((openNote) => !openNote);
        }
    };

    return (
        <div className='note'>
            <p className='note__title'>{title}</p>
            <p className={`note__text ${readNote ? 'note__text--open' : ''}`}>
                {text}
            </p>
            <div className='note__btn-container'>
                <button
                    className='note__btn note__btn--delete'
                    type='submit'
                    onClick={() => deleteItem(id)}
                >
                    Delete
                </button>

                <button
                    className='note__btn'
                    type='submit'
                    onClick={toggleNote}
                >
                    Read
                </button>
            </div>
        </div>
    );
};

export default Note;
