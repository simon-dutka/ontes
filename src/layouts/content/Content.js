import React from 'react';
import './content.scss';

// Components
import NotesManage from '../notes-manage/NotesManage';

const Content = () => {
    return (
        <div className='content'>
            <NotesManage />
        </div>
    );
};

export default Content;
