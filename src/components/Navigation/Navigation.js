import React from 'react';
import './Navigation.css';

const Navigation = ({ changeRoute }) => {
    return (
        <nav className='container'>
            <div className='start'>
                <p onClick={() => changeRoute('home')} className='logo pointer'>TV Show List</p>
            </div>
            <div className='end'>
                <p onClick={() => changeRoute('login')} className='login dim'>Login</p>
                <p onClick={() => changeRoute('signup')} className='pointer dim'>Sign Up</p>
            </div>
        </nav>
    );
}

export default Navigation;