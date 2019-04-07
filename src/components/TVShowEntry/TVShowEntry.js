import React from 'react';
import './TVShowEntry.css';

const TVShowEntry = ({ changeRoute, title, genre, rating, synopsis, fcc }) => {
    return (
        <tr class='container'>
            <td onClick={() => changeRoute(title)} className='pointer'>{title}</td>
            <td>genre: {genre}</td>
            <td>rating: {rating}</td>
            <td>synopsis: {synopsis}</td>
            <td>fcc: {fcc}</td>
        </tr>
    );
}

export default TVShowEntry;