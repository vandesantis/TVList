import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Logo = ({ changeRoute }) => {
  return (
    <div className='start'>
      <p onClick={() => changeRoute('home')} className='logo'>
      
        <Link to="/home">
          TV Show List
        </Link>
      </p>
    </div>
  )
}

const DropDown = ({ loadUser }) => {
  return (
    <div className='dropdown'>
      <div className='dropdown-link'>
        Settings
      </div>
      <Link to="/home" onClick={() => loadUser('')} className='dropdown-link'>
        Logout
      </Link>
    </div>
  )
}

const LoggedOutView = ({ changeRoute, user, loadUser }) => {
  if (!user.id) {
    return (
      <div className='links'>
        <div onClick={() => changeRoute('login')}>
          <Link to="/login" className='nav-link'>
            Login
          </Link>
        </div>
        <div onClick={() => changeRoute('signup')}>
          <Link to="/signup" className='nav-link'>
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
  return null;
}

const Navigation = ({changeRoute, user, loadUser}) => {
    let userButton = null;
    if (user.id) {
      userButton = 
        <div className='user-wrap user'>
          <Link to="/profile" className=''>
            {user.username}
          </Link>
          <DropDown loadUser={loadUser}/>
        </div>
    }

    return (      
      <div className='nav'>
        <Logo changeRoute={changeRoute}/>
        <LoggedOutView user={user} changeRoute={changeRoute}/>
        {userButton}
      </div>
    );
}

export default Navigation;