import React from 'react';
import './app.scss';

//Layouts
import { Top, Notes, Content } from './layouts';

const app = () => {
    return (
        <div>
            <Top />
            <Content />
        </div>
    );
};

export default app;
