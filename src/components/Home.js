import React from 'react';
// import TVShow from './TVShow';
import TVShowList from './TVShowList';

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

class Home extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <h1>TV Show List</h1>
                <TVShowList />
            </div>
        );
      }
}

export default Home;