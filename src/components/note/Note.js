import React from 'react';
import './note.scss';

const Note = ({ title, text, id, deleteItem }) => {
    return (
        <div className='note'>
            <p className='note__title'>{title}</p>
            <p className='note__text'>{text}</p>
            <div className='note__btn-container'>
                <button
                    className='note__btn note__btn--delete'
                    type='submit'
                    onClick={() => deleteItem(id)}
                >
                    Delete
                </button>

                <button className='note__btn' type='submit'>
                    Read
                </button>
            </div>
        </div>
    );
};

export default Note;
