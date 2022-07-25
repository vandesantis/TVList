import React from 'react';
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

const LoggedOutView = ({ changeRoute, user }) => {
  if (!user.id) {
    return (
      <div className='links'>
        <div onClick={() => changeRoute('user')}>
          <Link to="/profile" className='nav-link'>
            Profile
          </Link>
        </div>
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

const LoggedInView = ({ changeRoute, user }) => {
  if (user.id) {
    return (
      <nav className='links'>
        <Link to="/profile" className='nav-link'>
          {user.username}
        </Link>
      </nav>
    );
  }
  return null;
}

class Navigation extends React.Component {
  render() {
    return (      
      <div className='nav'>
        <Logo changeRoute={this.props.changeRoute} />
        <LoggedOutView user={this.props.user} changeRoute={this.props.changeRoute} />
        <LoggedInView user={this.props.user} />

      </div>
    );
  }
}

export default Navigation;