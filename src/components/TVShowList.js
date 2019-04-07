import React from 'react';
import TVShowEntry from './TVShowEntry/TVShowEntry';

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

class TVShowList extends React.Component {
    // constructor() {
    //     super();
    // }
    tvShowArray = exampleData.data.map((tvShow, i) => {
        return (
            <TVShowEntry changeRoute={this.props.changeRoute}
                title={tvShow.title}
                genre={tvShow.genre}
                rating={tvShow.rating}
                synopsis={tvShow.synopsis}
                fcc={tvShow.fcc}/>
        )
    });

    render() {
        return (
            <table>
                { this.tvShowArray }
            </table>
        );
    }
}

export default TVShowList;