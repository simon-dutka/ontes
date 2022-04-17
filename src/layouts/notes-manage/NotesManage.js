import React, { useState } from 'react';
import './notesManage.scss';

// Notes data
import { Note } from '../../components';

const NotesManage = () => {
    // State for toggling add note element
    const [open, setOpen] = useState(false);

    // Toggle adding button
    const toggleAddNote = () => {
        setOpen(!open);
    };

    // Toggle button component
    const TogglerTag = () => (
        <>
            <p onClick={toggleAddNote} className='add-note__heading'>
                + Add Note
            </p>
        </>
    );

    // Note title
    const [title, setTitle] = useState('');

    // Set title state
    const addTitle = (event) => {
        setTitle(event.target.value);
    };

    // Note text
    const [text, setText] = useState('');

    // Set text state
    const addText = (event) => {
        setText(event.target.value);
    };

    // An array with all notes
    const [allNotes, setAllNotes] = useState([]);

    // ID's for objects in an allNotes array
    allNotes.forEach((item, i) => {
        item.id = i + 1;
    });

    // Add new note to an array
    const addNote = () => {
        const note = {
            title: title,
            text: text,
        };

        const newNote = [...allNotes, note];

        if (title.length > 0 && text.length > 0) {
            setAllNotes(newNote);

            // Reset title and text to default values
            setTitle('');
            setText('');
        }
    };

    // An array with deleted notes
    const [deletedNotes, setDeletedNotes] = useState([]);

    const deleteNote = (id) => {
        const deletedNote = allNotes.filter((element) => element.id == id + 1);

        // Move note to deletedNotes
        deletedNote.forEach(function (element) {
            deletedNotes.includes(element)
                ? setDeletedNotes([...deletedNotes])
                : setDeletedNotes([...deletedNotes, element]);
        });

        // Delete note from allNotes
        const remainingNotes = allNotes.filter(
            (element) => element.id !== id + 1
        );

        setAllNotes(remainingNotes);
    };

    return (
        <>
            {open ? (
                <>
                    <div className='add-note add-note--open'>
                        <TogglerTag />

                        <input
                            className='add-note__title'
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={addTitle}
                        />

                        <textarea
                            className='add-note__text'
                            type='text'
                            placeholder='Write your note here'
                            value={text}
                            onChange={addText}
                        />

                        <button
                            className='add-note__btn'
                            type='submit'
                            onClick={addNote}
                        >
                            Submit
                        </button>
                    </div>
                </>
            ) : (
                <div className='add-note'>
                    <TogglerTag />
                </div>
            )}

            <div className='notes-container'>
                {allNotes.map((item, index) => (
                    <Note
                        title={item.title}
                        text={item.text}
                        key={index}
                        deleteItem={() => deleteNote(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default NotesManage;
