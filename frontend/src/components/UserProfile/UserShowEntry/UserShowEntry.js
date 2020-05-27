import React from 'react';
// import './TVShowEntry.css';
import { Link } from 'react-router-dom';

const UserShowEntry = ({ openShowPage, title, genre, watchingStatus, rating, synopsis, fcc }) => {
    return (
        <tr className='home-list'>
            <td><p onClick={() => openShowPage(title, genre, rating, synopsis, fcc)} className='title dim'>
                <Link to={"/show/" + title} className='title dim'>
                    {title}
                </Link>
            </p></td>
            <td className='genre'>{genre}</td>
            <td className='watchingStatus'>{watchingStatus}</td>
            <td className='rating'>{rating}</td>
            <td className=''>
                <p className='addToList'>Remove from list</p>
            </td>
        </tr>
    );
}

export default UserShowEntry;