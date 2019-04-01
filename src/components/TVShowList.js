import React from 'react';
import TVShow from './TVShow';

const exampleData = {
    data: [
        {
            title: "game of thrones",
            genre: "action",
            rating: "N/A",
            synopsis: "dragons and stuff",
            fcc: "TV-MA"
        },
        {
            title: "Breaking bad",
            genre: "action",
            rating: "N/A",
            synopsis: "meth",
            fcc: "TV-MA"
        }
    ]
}

const TVShowList = () => {
    // constructor() {
    //     super();
    // }

    const tvShowArray = exampleData.data.map((tvShow, i) => {
        return (
            <TVShow title={tvShow.title}
                genre={tvShow.genre}
                rating={tvShow.rating}
                synopsis={tvShow.synopsis}
                fcc={tvShow.fcc}/>
        )
    });

    return (
        <div>
            { tvShowArray }
        </div>
    );
}

export default TVShowList;