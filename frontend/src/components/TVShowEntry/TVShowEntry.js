import React from 'react';
import './TVShowEntry.css';
import { Link } from 'react-router-dom';

const TVShowEntry = ({ openShowPage, show }) => {
  let {title, genre, rating, synopsis, fcc} = show;

  // trying to condense the checkNulls function
  // console.log(show)
  // show = Object.keys(show).map((key) => (show[key] === null || show[key] === "") ? show[key]="N/A" :  show[key]);
  // console.log(show)

  const checkNulls = () => {
    if (title === null || title === "") {
      title = "N/A";
    }
    if (genre === null || genre === "") {
      genre = "N/A";
    }
    if (rating === null || rating === "") {
      rating = "N/A";
    }
    if (synopsis === null || synopsis === "") {
      synopsis = "N/A";
    }
    if (fcc === null || fcc === "") {
      fcc = "N/A";
    }
  }

  checkNulls();
  return (
    <tr className='home-list'>
      <td><p onClick={() => openShowPage(show)} className='title dim'>
        <Link to={"/show/" + title} className='title dim'>
          {title}
        </Link>
      </p></td>
      <td className='genre'>{genre}</td>
      <td className='rating'>{rating}</td>
    </tr>
  );
}

export default TVShowEntry;