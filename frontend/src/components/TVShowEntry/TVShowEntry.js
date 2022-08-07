import React from 'react';
import './TVShowEntry.css';
import { Link } from 'react-router-dom';

const ColumnEntry = ({ type, name }) => {
  if (name === null || name === "") {
    name = "N/A"
  }
  return <td className={type}>{name}</td>
}

const TVShowEntry = ({ openShowPage, show }) => {
  let {title, genre, rating} = show;

  return (
    <tr className='home-list'>
      <td><p onClick={() => openShowPage(show)} className='title dim'>
        <Link to={"/show/" + title} className='title dim'>
          {title}
        </Link>
      </p></td>
      <ColumnEntry type='genre' name={genre}/>
      <ColumnEntry type='rating' name={rating} />
    </tr>
  );
}

export default TVShowEntry;