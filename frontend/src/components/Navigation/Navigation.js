import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const LoggedOutView = ({ changeRoute, user }) => {
    if (!user.id) {
        return (
            <nav className=''>
                <ul className='nav'>
                    <li className='start'><p onClick={() => changeRoute('home')} className='pointer dim'>
                        <Link to="/home">
                            TV Show List
                        </Link>   
                    </p></li>
                    <li><p onClick={() => changeRoute('user')} className='mr4 pointer dim'>
                        <Link to="/profile">
                            Profile
                        </Link>
                    </p></li>
                    <li><p onClick={() => changeRoute('login')} className='mr4 pointer dim'>
                        <Link to="/login">
                            Login
                        </Link>
                    </p></li>
                    <li><p onClick={() => changeRoute('signup')} className='mr3 pointer dim'>
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </p></li>
                </ul>
            </nav>
        );
    }
    return null;
}

const LoggedInView = ({ changeRoute, user }) => {
    if (user.id) {
        return (
            <nav className=''>
                <ul className='nav'>
                    <li className='start'><p onClick={() => changeRoute('home')} className='pointer dim'>
                        <Link to="/home">
                            TV Show List
                        </Link>   
                    </p></li>
                    <li><p onClick={() => changeRoute('user')} className='mr4 pointer dim'>
                        <Link to="/profile">
                            {user.username}
                        </Link>
                    </p></li>
                    <li><p onClick={() => changeRoute('login')} className='mr4 pointer dim'>
                        <Link to="/login">
                            Login
                        </Link>
                    </p></li>
                    <li><p onClick={() => changeRoute('signup')} className='mr3 pointer dim'>
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </p></li>
                </ul>
            </nav>
        );
    }
    return null;
}

{/* 
            <div className='start'>
                <p onClick={() => changeRoute('home')} className='logo pointer'>TV Show List</p>
            </div>
            <div className='end'>
                <p onClick={() => changeRoute('login')} className='login dim'>Login</p>
                <p onClick={() => changeRoute('signup')} className='pointer dim'>Sign Up</p>
            </div> */}

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <LoggedOutView user={this.props.user} changeRoute={this.props.changeRoute} />
                <LoggedInView user={this.props.user} changeRoute={this.props.changeRoute} />
            </div>
        );
    }
}

export default Navigation;