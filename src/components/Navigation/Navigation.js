import React from 'react';
import './Navigation.css';

const Navigation = ({ changeRoute }) => {
    return (
        <nav>
            <p onClick={() => changeRoute('login')} className='login dim'>Login</p>
            <p onClick={() => changeRoute('signup')} className='pointer dim'>Sign up</p>
        </nav>
    );
}

export default Navigation;