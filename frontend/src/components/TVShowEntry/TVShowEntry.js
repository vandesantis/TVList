import React from 'react';
import './TVShowEntry.css';

const TVShowEntry = ({ openShowPage, title, genre, rating, synopsis, fcc }) => {
    const checkNulls = () => {
        if (title === null|| title === "") {
            title = "N/A";
        }
        if (genre === null || genre === "") {
            genre = "N/A";
        }
        if (rating === null|| rating === "") {
            rating = "N/A";
        }
        if (synopsis === null|| synopsis === "") {
            synopsis = "N/A";
        }
        if (fcc === null|| fcc === "") {
            fcc = "N/A";
        }
    }

    checkNulls();
    return (
        <tr className='home-list'>
            <td><p onClick={() => openShowPage(title, genre, rating, synopsis, fcc)} className='title dim'>{title}</p></td>
            <td className='genre'>{genre}</td>
            <td className='rating'>{rating}</td>
            <td className=''>
                <p className='addToList'>Add to list</p>
            </td>
            {/* print N/A if rating is null */}
            {/* {rating !== null ? (
                <td className='rating'>{rating}</td>
            ) : (
                <td className='rating'>N/A</td>
            )} */}
        </tr>
    );
}

export default TVShowEntry;