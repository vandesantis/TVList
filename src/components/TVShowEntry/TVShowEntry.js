import React from 'react';
import './TVShowEntry.css';

const TVShowEntry = ({ changeRoute, title, genre, rating, synopsis, fcc }) => {
    return (
        <div class='container'>
            <h1 onClick={() => changeRoute(title)} className='pointer'>{title}</h1>
            <p>genre: {genre}</p>
            <p>rating: {rating}</p>
            <p>synopsis: {synopsis}</p>
            <p>fcc: {fcc}</p>
        </div>
    );
}

export default TVShowEntry;