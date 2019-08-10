import React from 'react';
import TVShowEntry from '../TVShowEntry/TVShowEntry';
import './TVShowList.css';

// const exampleData = {
//     data: [
//         {
//             title: "game of thrones",
//             genre: "action",
//             rating: "N/A",
//             synopsis: "dragons and stuff",
//             fcc: "TV-MA"
//         },
//         {
//             title: "Breaking bad",
//             genre: "action",
//             rating: "N/A",
//             synopsis: "meth",
//             fcc: "TV-MA"
//         }
//     ]
// }

class TVShowList extends React.Component {

    // _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            shows: []
        }
    }

    componentDidMount() {
        // this._isMounted = true;
        this.getShows();
    }

    getShows = () => {
        fetch('http://localhost:3000/homelist', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},

        })
        .then(response => response.json())
        .then(shows => {
            // if (this._isMounted) {
                this.setState({shows: shows}) 
            // }
        })
    }

    // componenetWillUnmount() {
    //     this._isMounted = false;
    // }

    render() {
        const { shows } = this.state;

        const filteredData = shows.filter((shows, i) => {
            return shows.title.toLowerCase().includes(this.props.searchfield.toLowerCase());
        });
    
        // this.getShows();
        const tvShowArray = filteredData.map((show, i) => {
            return (
                <TVShowEntry 
                    key={show.title}
                    openShowPage={this.props.openShowPage}
                    title={show.title}
                    genre={show.genre}
                    rating={show.rating}
                    synopsis={show.synopsis}
                    fcc={show.fcc}/>

                // <TVShowEntry 
                //     key={tvShow.title}
                //     openShowPage={this.props.openShowPage}
                //     title={tvShow.title}
                //     genre={tvShow.genre}
                //     rating={tvShow.rating}
                //     synopsis={tvShow.synopsis}
                //     fcc={tvShow.fcc}/>
            )
        });

        return (
            <table>
                <tbody>
                    <tr className='table-header'>
                        <td>Title</td>
                        <td>Genre</td>
                        <td>Rating</td>
                        <td>Add to list</td>
                    </tr>
                    { tvShowArray }
                </tbody>
            </table>
        );
    }
}

export default TVShowList;