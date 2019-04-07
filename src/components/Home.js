import React from 'react';
import TVShowList from './TVShowList/TVShowList';

class Home extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        let { openShowPage } = this.props;
        return (
            <div>
                {/* <h1>TV Show List</h1> */}
                <TVShowList openShowPage = {openShowPage}/>
            </div>
        );
      }
}

export default Home;