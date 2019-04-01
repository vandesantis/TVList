import React from 'react';

// const exampleData = {
//     data: [
//         {
//             title: "game of thrones",
//             genre: "action",
//             rating: "N/A",
//             synopsis: "dragons and stuff",
//             FCC: "TV-MA"
//         },
//         {
//             title: "Breaking bad",
//             genre: "action",
//             rating: "N/A",
//             synopsis: "meth",
//             FCC: "TV-MA"
//         }
//     ]
// }

const TVShow = ({ title, genre, rating, synopsis, fcc }) => {
    // constructor() {
    //     super();
    // }

    return (
        <div>
            <h1>{title}</h1>
            <p>genre: {genre}</p>
            <p>rating: {rating}</p>
            <p>synopsis: {synopsis}</p>
            <p>fcc: {fcc}</p>
        </div>
    );
}

export default TVShow;