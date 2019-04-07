import React from 'react';
import TVShowEntry from '../TVShowEntry/TVShowEntry';
import './TVShowList.css';

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
            <TVShowEntry openShowPage={this.props.openShowPage}
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
                <tr class='table-header'>
                    <td>Title</td>
                    <td>Genre</td>
                    <td>Rating</td>
                </tr>
                { this.tvShowArray }
            </table>
        );
    }
}

export default TVShowList;