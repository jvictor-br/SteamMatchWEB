import React from 'react';
import './Toolbar.css'
import { Link } from 'react-router-dom';

const Toolbar = () => {
    return (
        <div className='toolbar'>
            <Link to={'/'}><p>STEAM<span>MATCH</span>&#174;</p></Link>
            
        </div>
    );
}

export default Toolbar;
